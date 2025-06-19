import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { FaCube } from "react-icons/fa";
import { FaCircle } from 'react-icons/fa'; // For risk icon
import { FaClipboardList } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../Contexts/UserContext';
import './ProductInventory.css';

const Inventory = () => {
  const { user } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch items from the backend
  const fetchItems = async () => {
    const response = await fetch(`http://localhost:9000/users/${user.id}/products`);
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    if (user && user.id) {  // ✅ Only fetch if user is not null
      fetchItems();
    }
  }, [user]);
    

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    item.productName?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <div className="header">
        <div className="search-bar-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input className='search-input'
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Link to="/add-product">
          <button className="add-product-button">+ Add New Product</button>
        </Link>
      </div>

      <div className="grid">
        {filteredItems.map((item, index) => (
          <
            Link to={`/product/${item.id}`} key={index}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >  {/* Link to product details page */}
            <div className="card" key={index}>
              <div className="title-container-product">
                <AiFillProduct size={30} className="icon" />
                <h3>{item.productName}</h3>
              </div>
              <div className="details">
                <div className="detail">
                  <FaCube size={20} className={`icon ${item.productPhase.toLowerCase().replace(' ', '-')}`} />
                  <span>{item.productPhase}</span>
                </div>
                <div className="detail">
                  <FaCircle size={20} className={`icon ${item.risk.toLowerCase().replace(' ', '-')}`} />
                  <span>{item.risk}</span>
                </div>
                <div className="detail">
                  <FaClipboardList size={20} className={`icon ${item.assessmentStatus.toLowerCase().replace(' ', '-')}`} />
                  <span>{item.assessmentStatus}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Inventory;