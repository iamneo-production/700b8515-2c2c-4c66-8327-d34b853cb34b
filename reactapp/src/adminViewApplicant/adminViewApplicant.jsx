import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Navbar from './Navbar';

const UserAppliedPolicy = () => {
  const applicantDetails = {
    name: 'zzzz',
    address: 'xxx',
    mobile: '02939110',
    email: 'a@gmail.com',
    aadharNumber: '9929919292',
    panNumber: 'CQ22342D2',
  };

  const handleDeleteApplicant = () => {
    // Handle delete applicant functionality
    console.log('Delete applicant');
  };

  const handleEditApplicant = () => {
    // Handle edit applicant functionality
    console.log('Edit applicant');
  };

  const styles = {
    pageContainer: {
      backgroundColor: '#c6c1cf', // Background color for the entire page
      minHeight: '100vh',
      padding: '20px',
    },
    searchContainer: {
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      marginTop: '25px',
      marginLeft:'500px'
    },
    searchInput: {
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '300px',
      marginRight: '10px',
    },
    searchButton: {
      padding: '8px 16px',
      backgroundColor: '#42618f',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      cursor: 'pointer',
    },
    applicantContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      marginRight: '250px',
      marginLeft: '50px'
    },
    leftContent: {
      flex: 1,
    },
    rightContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    iconsContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    icon: {
      cursor: 'pointer',
      marginLeft: '10px',
      fontWeight: 'bold',
    },
    detailsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter policy id to search"
          style={styles.searchInput}
        />
        <button id="searchById" style={styles.searchButton}>Search</button>
      </div>

      <div id="gridApplicants" style={styles.applicantContainer}>
        <div style={styles.leftContent}>
          <p>
            <strong>Applicant Name:</strong> {applicantDetails.name}
          </p>
          <p>
            <strong>Address:</strong> {applicantDetails.address}
          </p>
          <p>
            <strong>Mobile No:</strong> {applicantDetails.mobile}
          </p>
          <p>
            <strong>Email:</strong> {applicantDetails.email}
          </p>
        </div>
        <div style={styles.rightContent}>
          <div style={styles.detailsRow}>
            <p>
              <strong>Aadhar Number:</strong> {applicantDetails.aadharNumber}
            </p>
          </div>
          <div style={styles.detailsRow}>
            <p>
              <strong>PAN Number:</strong> {applicantDetails.panNumber}
            </p>
          </div>
          <div style={styles.iconsContainer}>
            <FaTrashAlt
              id="deleteApplicants"
              style={styles.icon}
              onClick={handleDeleteApplicant}
            />
            <FaEdit
              id="editApplicant"
              style={styles.icon}
              onClick={handleEditApplicant}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAppliedPolicy;
