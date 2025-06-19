const v4 = require('uuid');  // Import uuid to generate unique IDs
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Add this line
const app = express();
app.use(cors()); // Add this line
const PORT = 9000;
const masterTasks = require('./assessment_master.json');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create a new database (or open an existing one)
let db = new sqlite3.Database('src/Backend/compliance-database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { productId } = req.params;
    const folderName = req.query.folderName; // Retrieve folder name from the request body
    if (!folderName) {
      return cb(new Error('Folder name is required'), null);
    }
    const uploadDir = path.join(__dirname, `FileStorage/${productId}`, folderName); // Set directory to `uploads/productId/folderName`

    if (fs.existsSync(uploadDir)) {
      fs.rmSync(uploadDir, { recursive: true }); // Remove the directory and its contents
    }
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {  
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

// Example JSON data
const jsonData = {
    "productName": "Blue Lagoon",
    "productDescription": "Lorem ipsum dolor sit amet...",
    "industry": "Finance",
    "dataType": "Text",
    "mlApplicationType": "LLM",
    "productDocumentation": null,
    "assessments": [
      {
        "name": "ISO/IEC TR 24029-1 - AI Assessment of the Robustness of Neural Networks",
        "startDate": "10/14/2024",
        "createdBy": "user_handle",
        "progress": 0
      },
      {
        "name": "EU AI Act (Regulation EU) 2024/1689",
        "startDate": "10/14/2024",
        "createdBy": "user_handle",
        "progress": 30
      }, 
      {
        "name": "CAI Trustworthy AI Risk Assessment",
        "startDate": "12/19/2024",
        "createdBy": "user_handle",
        "progress": 100
      },
      {
        "name": "CAI Trustworthy AI Risk Assessment",
        "startDate": "12/04/2024",
        "createdBy": "user_handle",
        "progress": 20
      },
    ],
    "assessmentStatus": "In Assessment",
    "assessmentProgress": 30,
    "risk": "High Risk",
    "riskClassificationMethod": "Manual Classification",
    "productPhase": "Testing",
    "productOwner": "Max Mustermann",
    "businessLineLawyer": "John Doe",
    "id": "34e12c5a-45fa-4c67-9d72-4a6712eb13d5"
  };

// Create tables for each JSON file
db.serialize(() => {
    // Create the Product table
  db.run(`CREATE TABLE IF NOT EXISTS Product (
    id TEXT PRIMARY KEY,
    productName TEXT,
    productDescription TEXT,
    industry TEXT,
    dataType TEXT,
    mlApplicationType TEXT,
    productDocumentation TEXT,
    assessmentStatus TEXT,
    assessmentProgress INTEGER,
    risk TEXT,
    riskClassificationMethod TEXT,
    productPhase TEXT,
    productOwner TEXT,
    businessLineLawyer TEXT
  )`);
  console.log('Product table created successfully');

  // Create the Assessments table
  db.run(`CREATE TABLE IF NOT EXISTS Assessments (
    id TEXT PRIMARY KEY,
    productId TEXT,
    name TEXT,
    startDate TEXT,
    createdBy TEXT,
    progress INTEGER,
    FOREIGN KEY(productId) REFERENCES Product(id)
  )`);
  console.log('Assessment table created successfully');

  // Create Tasks table
  db.run(`CREATE TABLE IF NOT EXISTS Tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    taskId TEXT NOT NULL,
    category TEXT NOT NULL,
    article TEXT,
    subSection TEXT,
    assessmentId TEXT NOT NULL,
    description TEXT,
    status TEXT,
    owner TEXT,
    lifecycle TEXT
  )`);
  console.log('Task table created successfully');


  // Create Master Tasks table to store all tasks associated with a certain assessment
  db.run(`CREATE TABLE IF NOT EXISTS MasterTasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoryName TEXT NOT NULL,
    articleName TEXT,
    subSectionName TEXT,
    assessmentName TEXT NOT NULL,
    name TEXT NOT NULL,
    taskId TEXT NOT NULL,
    description TEXT,
    status TEXT,
    owner TEXT,
    lifecycle TEXT
  )`);
  console.log('Master table created successfully');

  // Create the Users table
  db.run(`CREATE TABLE IF NOT EXISTS Users (
    id TEXT PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL
  )`);
  console.log('Users table created successfully');

  db.all(`SELECT * FROM Users`, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    if (rows.length === 0) {
      console.log('No users found. Inserting default users for each role.');
      setDefaultUsers();
    }
  });

  db.run(`CREATE TABLE IF NOT EXISTS ProductAccess (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Product(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    UNIQUE(product_id, user_id)
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS TaskAccess (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (task_id) REFERENCES Tasks(taskId) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    UNIQUE(task_id, user_id) -- Prevents duplicate entries
  )`);

  // db.run('DELETE FROM Users WHERE rowid NOT IN (SELECT MIN(rowid) FROM Users GROUP BY email)');
  // console.log('Duplicate users removed successfully');

  // db.run('CREATE UNIQUE INDEX idx_email_unique ON users(email)');
  console.log('Unique index on email created previously');

  db.all(`SELECT * FROM MasterTasks`, [], (err, rows) => {
    if (err) {
        console.log("master tasks table does not exist");
      return console.error(err.message);
    }

    if (rows.length === 0) {
      console.log("Master tasks table does not exist. Create new table and dummy product.");
      loadMasterTasks();
      //Insert product data
      db.run(`INSERT INTO Product (id, productName, productDescription, industry, dataType, mlApplicationType, 
        productDocumentation, assessmentStatus, assessmentProgress, risk, riskClassificationMethod, productPhase, productOwner, businessLineLawyer)
        VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [   
            jsonData.id,
            jsonData.productName,
            jsonData.productDescription,
            jsonData.industry,
            jsonData.dataType,
            jsonData.mlApplicationType,
            jsonData.productDocumentation,
            jsonData.assessmentStatus,
            jsonData.assessmentProgress,
            jsonData.risk,
            jsonData.riskClassificationMethod,
            jsonData.productPhase,
            jsonData.productOwner,
            jsonData.businessLineLawyer
        ],
        function (err) {
            if (err) {
                return console.error(err.message);
            }
            console.log('Inserted product data.');
            }
        );
        // Insert assessment data, linking to the product by productId
        jsonData.assessments.forEach(assessment => {
            console.log(assessment);
            const id = v4.v4();
            db.run(`INSERT INTO Assessments (id, productId, name, startDate, createdBy, progress)
                VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    id,
                    jsonData.id, // Foreign key reference to the product
                    assessment.name,
                    assessment.startDate,
                    assessment.createdBy,
                    assessment.progress
                ],
                function (err) {
                    if (err) {
                        return console.error(err.message);
                    }   
                    console.log('Inserted assessment data.');
                }
            );
          setTasks(id, assessment.name);
      });
    console.log('MasterTasks table queried successfully');
    // console.log(rows);
    }
  })
});

async function setDefaultUsers() {
  const hashedPassword = await bcrypt.hash('123', 10);

  db.run(`INSERT INTO Users (id, username, email, password, role) VALUES (?, ?, ?, ?, ?)`,
        [v4.v4(), 'admin', 'admin@getcertif.ai', hashedPassword, 'Product Manager'],
        function (err) {
          if (err) {
            return console.error(err.message);
          }
          console.log('Inserted default user.');
      });
      db.run(`INSERT INTO Users (id, username, email, password, role) VALUES (?, ?, ?, ?, ?)`,
        [v4.v4(), 'admin_dev', 'adminDev@getcertif.ai', hashedPassword, 'AI Developer'],
        function (err) {
          if (err) {
            return console.error(err.message);
          }
          console.log('Inserted default user.');
      });
      db.run(`INSERT INTO Users (id, username, email, password, role) VALUES (?, ?, ?, ?, ?)`,
        [v4.v4(), 'admin_assessor', 'adminAssessor@getcertif.ai', hashedPassword, 'AI Assessor'],
        function (err) {
          if (err) {
            return console.error(err.message);
          }
          console.log('Inserted default user.');
      });
}


function loadMasterTasks() {
  // Loop through each assessment in the JSON
  masterTasks.assessments.forEach(assessment => {
    const assessmentName = assessment.name;

    // Loop through each task category within the assessment
    assessment.taskCategories.forEach(category => {
      const categoryName = category.name;
      const article = category.description;

      // Loop through each task within the category
      category.sections.forEach(subSection => {
        const subSectionName = subSection.name;
        subSection.tasks.forEach(task => {

          console.log('Inserting task:', {
              categoryName,
              assessmentName,
              taskName: task.name,
              taskId: task.id,
              description: task.description
            });
          // Prepare the SQL insert statement
          const sql = `INSERT INTO MasterTasks (categoryName, assessmentName, articleName, subSectionName, name, taskId, description, status, owner, lifecycle)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

          // Insert each task into the MasterTasks table
          db.run(sql, [
            categoryName,      // categoryName
            assessmentName,    // assessmentName
            article,        // articleName
            subSectionName,     // subSectionName
            task.name,         // name (task name)
            task.id,           // taskId (task ID)
            task.description,  // description
            task.status,     // status
            task.owner,       // owner
            task.lifecycle   // lifecycle
          ], function (err) {
            if (err) {
              return console.error(err.message);
            }
            console.log(`Inserted task: ${task.name} in assessment: ${assessmentName}, category: ${categoryName}`);
          });
        });
      });
    });
  });
}

function setTasks(assessmentId, assessmentName) {
  // Query the database for tasks associated with the given assessmentId
  const query = `SELECT * FROM MasterTasks WHERE assessmentName = ? ORDER BY id`;

  db.all(query, [assessmentName], (err, tasks) => {
    if (err) {
      console.error(err.message);
      return;
    }

    // Log the tasks to the console
    // console.log(`Tasks for assessment ${assessmentName}:`, tasks);
    tasks.forEach(task => {
      const values = [
        task.name,
        task.taskId,
        task.categoryName,
        task.articleName,
        task.subSectionName,
        assessmentId,
        task.description,
        'In Progress',
        task.owner,
        task.lifecycle
      ];
      console.log('Inserting task:', values);
      const query = `INSERT INTO Tasks (name, taskId, category, article, subSection, assessmentId, description, status, owner, lifecycle)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      
      db.run(query, values, function (err) {
        if (err) {
          return console.error(err.message);
        }
        console.log(`Inserted task: ${task.name} in category: ${task.categoryName}`);
      });
    });
  });
}

// 1. Get all products
app.get('/products', (req, res) => {
    const query = `SELECT * FROM Product`;
    db.all(query, [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });

// 2. Get a specific product by ID
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const query = `SELECT * FROM Product WHERE id = ?`;
    db.get(query, [productId], (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (row) {
        res.json(row);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    });
  });


// 3. Create a new product
app.post('/products', (req, res) => {
    console.log(req.body);
    const {
      id, productName, productDescription, industry, dataType,
      mlApplicationType, productDocumentation, assessmentStatus,
      assessmentProgress, risk, riskClassificationMethod, productPhase, productOwner, businessLineLawyer
    } = req.body;
  
    const query = `INSERT INTO Product (
      id, productName, productDescription, industry, dataType, mlApplicationType,
      productDocumentation, assessmentStatus, assessmentProgress, risk, riskClassificationMethod, productPhase, 
      productOwner, businessLineLawyer
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    const values = [
      id, productName, productDescription, industry, dataType, mlApplicationType,
      productDocumentation, assessmentStatus, assessmentProgress, risk, riskClassificationMethod, productPhase, 
      productOwner, businessLineLawyer
    ];
  
    db.run(query, values, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Product created', id: this.lastID });
    });
  });


// 4. Update an existing product
app.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    console.log(req.body);
    const {updates} = req.body;
    updates.forEach(update => {
      const {attribute, value} = update;
      console.log(attribute);

      const query = `UPDATE Product SET ${attribute} = ? WHERE id = ?`;
      const values = [
      value, productId
      ];

      db.run(query, values, function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
      });
    });
    res.json({ message: 'Product updated' });
});

  app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    const query = `DELETE FROM Product WHERE id = ?`;

    db.run(query, [productId], function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const folderPath = path.join(__dirname, 'FileStorage', productId);

      // Check if the directory exists
      if (fs.existsSync(folderPath)) {
        // Delete the directory and its contents
        fs.rmSync(folderPath, { recursive: true });
        console.log(`Deleted folder: ${folderPath}`);
      }

      res.json({ message: 'Product and associated folder deleted' });
    });
  });

// 1. Get all assessments
app.get('/assessments', (req, res) => {
    const query = `SELECT * FROM Assessments`;
    db.all(query, [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });

// get all users with access to a specific product
app.get('/products/:id/users', (req, res) => {
  const productId = req.params.id;

  const query = `
      SELECT u.id, u.username, u.email, u.role
      FROM Users u
      LEFT JOIN ProductAccess pa ON u.id = pa.user_id AND pa.product_id = ?
      WHERE u.role = 'Product Manager' OR pa.product_id IS NOT NULL;
  `;

  db.all(query, [productId], (err, rows) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(rows);
  });
});


// Get all users in the system
app.get('/users', (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const query = `SELECT * FROM Users`;

  db.all(query, (err, rows) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      console.log(rows);
      res.json(rows);
  });
});

// Get all products a specific user has access to
app.get('/users/:id/products', (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const query = `
      SELECT *
      FROM Product p
      WHERE EXISTS (
          -- Condition 1: The user is a Product Manager, so they have access to all products
          SELECT 1 FROM Users u WHERE u.id = ? AND u.role = 'Product Manager'
      ) 
      OR EXISTS (
          -- Condition 2: The user has an explicit entry in ProductAccess
          SELECT 1 FROM ProductAccess pa WHERE pa.product_id = p.id AND pa.user_id = ?
      );
  `;

  db.all(query, [userId, userId], (err, rows) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      console.log(rows);
      res.json(rows);
  });
});

// Assign a user to a product
app.post('/products/:id/users', (req, res) => {
  const productId = req.params.id;
  const { userId } = req.body;

  if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
  }

  // Check if the user is already a Product Manager
  db.get(`SELECT role FROM Users WHERE id = ?`, [userId], (err, user) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      if (user.role === 'Product Manager') {
          return res.status(400).json({ error: 'Product Managers already have access by default' });
      }

      // Insert user into ProductAccess if not already assigned
      const query = `INSERT INTO ProductAccess (product_id, user_id) VALUES (?, ?)`;
      db.run(query, [productId, userId], function (err) {
          if (err) {
              if (err.message.includes("UNIQUE constraint failed")) {
                  return res.status(400).json({ error: "User is already assigned to this product" });
              }
              return res.status(500).json({ error: err.message });
          }
          res.status(201).json({ message: 'User assigned to product successfully' });
      });
  });
});

app.get('/user-id', (req, res) => {
  const { name } = req.query;

  if (!name) {
      return res.status(400).json({ error: "Username is required" });
  }

  const query = `SELECT id FROM Users WHERE username = ?`;

  db.get(query, [name], (err, row) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (!row) {
          return res.status(404).json({ error: "User not found" });
      }
      res.json(row);
  });
});

// POST request to retrieve all assessments for a given productId
app.get('/assessments/:id', (req, res) => {
    // Extract productId from the request body
    const productId = req.params.id;
  
    if (!productId) {
      return res.status(400).json({ error: 'productId is required' });
    }
  
    // SQL query to get all assessments linked to the given productId
    const query = `SELECT * FROM Assessments WHERE productId = ?`;
  
    db.all(query, [productId], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      // Return an empty list if no assessments are found
      res.json(rows.length > 0 ? rows : []);
    });
  });

// 3. Create a new assessment
app.post('/assessments', (req, res) => {
    const {
      createdBy, id, name, productId, progress, startDate
    } = req.body;
  
    const query = `INSERT INTO Assessments (
      id, productId, name, startDate, createdBy, progress
    ) VALUES (?, ?, ?, ?, ?, ?)`;

    // db.run(`INSERT INTO Assessments (id, productId, name, startDate, createdBy, progress)
    //         VALUES (?, ?, ?, ?, ?, ?)`,
    //         [
    //             id,
    //             productId,
    //             name,
    //             startDate,
    //             createdBy,
    //             progress
    //         ],
    //         function (err) {
    //             if (err) {
    //                 return console.error(err.message);
    //             }   
    //             console.log('Inserted assessment data.');
    //         }
    //     );
    const values = [
      id, productId, name, startDate, createdBy, progress
    ];
  
    db.run(query, values, function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Assessment created', id: this.lastID });
    });

    setTasks(id, name);
  });

// Get all task categories for a given assessment
app.get('/categories/:id', (req, res) => {
  const assessmentId = req.params.id;
  const query = `SELECT DISTINCT category, article FROM Tasks WHERE assessmentId = ?`;
  db.all(query, [assessmentId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (rows.length > 0) {
      const categories = rows.map(row => row.category);
      res.json(rows);
    } else {
      res.status(404).json({ message: 'No categories found for this assessment' });
    }
  });
  });

app.get('/tasks/:id', (req, res) => {
  const assessmentId = req.params.id;
  const category = req.query.category;
  console.log(category);
  const query = `SELECT * FROM Tasks WHERE assessmentId = ? AND category = ? ORDER BY id`;
  db.all(query, [assessmentId, category], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
  }
);

// get assigned users of a task
app.get('/tasks/:taskId/assigned-users', (req, res) => {
  const { taskId } = req.params;

  const query = `
      SELECT u.id, u.username, u.role
      FROM Users u
      JOIN TaskAccess ta ON u.id = ta.user_id
      WHERE ta.task_id = ?;
  `;

  db.all(query, [taskId], (err, rows) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.json(rows);
  });
});

// assign a user to a task
app.post('/tasks/:taskId/assign-user', (req, res) => {
  const { taskId } = req.params;
  const { userId } = req.body;

  if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
  }

  // Get username and role from Users table
  db.get(`SELECT username, role FROM Users WHERE id = ?`, [userId], (err, user) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      if (user.role !== 'AI Developer' && user.role !== 'AI Assessor') {
          return res.status(400).json({ error: 'Only Developers and Assessors can be assigned' });
      }

      // Insert user into TaskAccess table (avoid duplicates)
      const query = `INSERT INTO TaskAccess (task_id, user_id) VALUES (?, ?) ON CONFLICT(task_id, user_id) DO NOTHING;`;
      db.run(query, [taskId, userId], function (err) {
          if (err) {
              return res.status(500).json({ error: err.message });
          }

          // Update the `owner` field in the `Tasks` table with the `username`
          const updateQuery = `UPDATE Tasks SET owner = ? WHERE taskId = ?`;
          db.run(updateQuery, [user.username, taskId], function (err) {
              if (err) {
                  return res.status(500).json({ error: err.message });
              }
              res.status(200).json({ message: `User ${user.username} assigned as task owner` });
          });
      });
  });
});

  // Get Master Tasks
app.get('/master-tasks', (req, res) => {
    const query = `SELECT * FROM MasterTasks`;
    db.all(query, [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ tasks: rows });
    });
  });

// 5. Get all users
app.get('/users', (req, res) => {
  const query = `SELECT * FROM Users`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.get('/user/', (req, res) => {
  const email = req.query.email;
  const query = `SELECT * FROM Users WHERE email = ?`;
  db.get(query, [email], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      res.json(row);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

// 2. Create a new user

app.post('/signup', async (req, res) => {
  const { id, username, email, password, role } = req.body;

  // Validate input
  if (!id || !username || !email || !password || !role) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into database
    const query = `INSERT INTO Users (id, username, email, password, role) VALUES (?, ?, ?, ?, ?)`;
    const values = [id, username, email, hashedPassword, role];

    db.run(query, values, function (err) {
      if (err) {
        console.error('Database Error:', err.message);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'User created successfully', id: this.lastID });
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 3. Check if email already exists at signup
app.post('/check-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM Users WHERE email = ?', [email], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });

    if (user) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(200).json({ message: 'Email is available' });
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 4. Login user
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request for:", email); // Log the incoming email
  console.log('Request body:', req.body);


  function getPasswordDB(email) {
    return new Promise((resolve, reject) => {
        db.get('SELECT password FROM Users WHERE email = ?', [email], (err, row) => {
            if (err) {
                console.error('Error running query:', err.message);
                reject(err); // Reject the promise on error
            } else if (row) {
                console.log('Hashed password:', row);
                resolve(row.password); // Resolve with the password
            } else {
                console.log('Email not found.');
                resolve(null); // Resolve with null if no user found
            }
        });
    });
  }
    
    const passwordDB = await getPasswordDB(email);
    
    if (!passwordDB) {
        console.log('Email not found:', email);
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Log the stored hash and the provided password for debugging
    console.log('Provided password:', password);
    console.log('Stored hash:', passwordDB);
    const isMatch = await bcrypt.compare(password, passwordDB);
    if (!isMatch) {
        console.log('Invalid password for user:', email);
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    console.log('Password match for user:', email);
    res.status(200).json({ message: 'Login successful' });
  
});

// POST endpoint for file upload
app.post('/upload/:productId', upload.single('file'), (req, res) => {
  const { productId } = req.params;

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.status(200).json({
    message: 'File uploaded successfully',
    productId,
    filePath: req.file.path,
  });
});

// POST endpoint for multiple file uploads
app.post('/upload-multiple/:productId', upload.array('files', 10), (req, res) => {
  const { productId } = req.params;

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' });
  }

  const uploadedFiles = req.files.map((file) => ({
    fileName: file.originalname,
    filePath: file.path,
  }));

  res.status(200).json({
    message: 'Files uploaded successfully',
    productId,
    files: uploadedFiles,
  });
});

// Route to fetch files for a given productId and folderName
app.get('/files', (req, res) => {
  const { productId, folderName } = req.query;

  if (!productId || !folderName) {
    return res.status(400).json({ error: 'productId and folderName are required' });
  }

  const folderPath = path.join(__dirname, 'FileStorage', productId, folderName);

  // Check if the directory exists
  if (!fs.existsSync(folderPath)) {
    return res.status(404).json({ error: 'Folder not found' });
  }

  // Read the directory and list files
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading the folder' });
    }

    // Return the list of files
    res.status(200).json({ files });
  });
});

// Route to fetch all files for a given productId, grouped by folder structure
app.get('/all_files', (req, res) => {
  const { productId } = req.query;

  if (!productId) {
    return res.status(400).json({ error: 'productId is required' });
  }

  const baseFolderPath = path.join(__dirname, 'FileStorage', productId);

  if (!fs.existsSync(baseFolderPath)) {
    return res.status(404).json({ error: 'No files found for this product' });
  }

  // Recursive function to build a folder tree
  function getFolderContents(directory) {
    const contents = {};

    fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        // Recursively get subdirectory contents
        contents[entry.name] = getFolderContents(entryPath);
      } else {
        // Add files to the directory object
        if (!contents.files) {
          contents.files = [];
        }
        const stats = fs.statSync(entryPath);
        contents.files.push({
          fileName: entry.name,
          size: `${(stats.size / 1024).toFixed(2)} KB`, // Convert bytes to KB
          created: stats.birthtime.toLocaleString('en-GB'), // File creation date
        });
      }
    });

    return contents;
  }

  // Start building the folder structure
  const folderStructure = getFolderContents(baseFolderPath);

  res.status(200).json(folderStructure);
});

// Serve static files
app.use('/files', express.static(path.join(__dirname, 'FileStorage')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
