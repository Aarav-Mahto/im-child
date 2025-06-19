# Compliance Cockpit Prototype

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Login Credentials
We have three admin users (one for each role)

- Product Manager: admin@getcertif.ai
- AI Developer: adminDev@getcertif.ai
- AI Assessor: adminAssessor@getcertif.ai

PW: 123 (for all three)

(or you could just go to /home to skip the login page :D )

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Installation

Navigate into the project directory and install all dependencies via:

```bash
npm install
```

## Running the Product Managenent Backend

**Note**: when testing, delete the `compliance_database.db` file if present. New changes might have altered the database structure. Launching the server will repopulate the database with the changes.

```bash
node src/Backend/DatabaseServer.js
```

## (Optional) Running the Chatbot API Server 

If you want to test the Risk Classification feature using the usecase classifier chatbot:

1. Checkout the repository https://github.com/CertifAI-GmbH/usecase-classifier-chatbot-noGUI
2. Follow the instructions in the README to run the chatbot server (it has to run in a separate terminal)

Else skip this step!

## Running the Frontend

In the project directory, you can run:

### `npm start`

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

```bash
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

```bash
npm eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
