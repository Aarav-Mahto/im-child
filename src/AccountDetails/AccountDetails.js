import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import certifAiLogo from '../assets/CAI_Logo_Black.png';
import './AccountDetails.css';
import Breadcrumb from '../Navigation/Breadcrumb';
import { BsCreditCard } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AccountDetails = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/home' },
    { name: 'Account Details', path: '/account-details' }
  ];
  const [openSection, setOpenSection] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Pagination state

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const rowsPerPage = 5; // Rows per page for the table
  const orderHistory = [
    { invoiceId: '006', date: '07/01/2025', detail: 'Basic subscription annual, 10 frameworks active', amount: 'Free Beta Trial', licenses: 10 },
    { invoiceId: '005', date: '07/12/2024', detail: 'Basic subscription annual, 7 frameworks active', amount: 'Free Beta Trial', licenses: 8 },
    { invoiceId: '004', date: '07/11/2024', detail: 'Basic subscription annual, 5 frameworks active', amount: 'Free Beta Trial', licenses: 7 },
    { invoiceId: '003', date: '07/10/2024', detail: 'Basic subscription annual, 3 frameworks active', amount: 'Free Beta Trial', licenses: 7 },
    { invoiceId: '002', date: '07/09/2024', detail: 'Basic subscription annual, 2 frameworks active', amount: 'Free Beta Trial', licenses: 6 },
    { invoiceId: '001', date: '07/08/2024', detail: 'Basic subscription annual, 0 frameworks active', amount: 'Free Beta Trial', licenses: 3 },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = orderHistory.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (direction) => {
    if (direction === 'next' && indexOfLastRow < orderHistory.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header
          title={
            <span>
              <img
                src={certifAiLogo}
                alt="CERTIF.AI"
                className="certif-ai-logo"
              />
              Compliance Cockpit
            </span>
          }
          description="Account Details"
        />
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
        <div className="account-details">
          <div className="collapsible-container">
            {/* Saved Payment Cards */}
            <div className="collapsible-section">
              <div
                className="collapsible-header"
                onClick={() => toggleSection('payment')}
              >
                Saved Payment Cards
                <span
                  className={`arrow ${openSection === 'payment' ? 'open' : ''}`}
                ></span>
              </div>
              {openSection === 'payment' && (
                <div className="collapsible-content">
                  <h4 className="box-title">Your saved cards</h4>
                  <div className="card-box">
                    <BsCreditCard className="card-icon" />
                    <span className="card-number">•••• •••• •••• 1234</span>
                    <span className="card-validity">| 12/25</span>
                    <button className="remove-card-button">Remove Card</button>
                  </div>
                  <div className="card-box">
                    <BsCreditCard className="card-icon" />
                    <span className="card-number">•••• •••• •••• 5678</span>
                    <span className="card-validity">| 01/28</span>
                    <button className="remove-card-button">Remove Card</button>
                  </div>
                  <button className="add-card-button">Add Card</button>
                </div>
              )}
            </div>

            {/* Order History */}
            <div className="collapsible-section">
              <div
                className="collapsible-header"
                onClick={() => toggleSection('orderHistory')}
              >
                Order History
                <span
                  className={`arrow ${
                    openSection === 'orderHistory' ? 'open' : ''
                  }`}
                ></span>
              </div>
              {openSection === 'orderHistory' && (
                <div className="collapsible-content">
                  <table className="order-history-table">
                    <thead>
                      <tr>
                        <th>Invoice ID</th>
                        <th>Date Issued</th>
                        <th>Subscription Detail</th>
                        <th>Amount</th>
                        <th># of Framework Licenses</th>
                        <th>Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRows.map((row, index) => (
                        <tr key={index}>
                          <td>{row.invoiceId}</td>
                          <td>{row.date}</td>
                          <td>{row.detail}</td>
                          <td>{row.amount}</td>
                          <td>{row.licenses}</td>
                          <td>
                            <a
                              href={`/order-details/${row.invoiceId}`}
                              className="order-details-link"
                            >
                              More details
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="pagination-container">
                    <div className="pagination">
                      <button
                        onClick={() => paginate('prev')}
                        disabled={currentPage === 1}
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        onClick={() => paginate('next')}
                        disabled={indexOfLastRow >= orderHistory.length}
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Subscription Details */}
            <div className="collapsible-section">
              <div
                className="collapsible-header"
                onClick={() => toggleSection('subscription')}
              >
                Subscription Details
                <span
                  className={`arrow ${
                    openSection === 'subscription' ? 'open' : ''
                  }`}
                ></span>
              </div>
              {openSection === 'subscription' && (
                <div className="collapsible-content subscription-container">
                  <a href={`/subscription/available-plans/`} className="subscription-card">
                    <span className="subscription-title">Available Plans</span>
                    <span className="arrow right"></span>
                  </a>
                  <a href={`/subscription/manage-subscription/`} className="subscription-card">
                    <span className="subscription-title">Manage your Subscription</span>
                    <span className="arrow right"></span>
                  </a>
                  <a href={`/subscription/cancel-subscription/`} className="subscription-card">
                    <span className="subscription-title">Cancel Subscription</span>
                    <span className="arrow right"></span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
