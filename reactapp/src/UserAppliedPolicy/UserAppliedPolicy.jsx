import React from 'react';
import Navbar from './Navbar';

const UserAppliedPolicy = () => {
  // Sample data for policy grid
  const policyData = [
    {
      policyName: 'Life insurance',
      yourPolicyId: '928888211',
      applicableAge: '5 to 50',
      policyDetails: 'aaa....',
      numberOfYearsPlan: '10 years',
      claimAmount: '2,00,000',
      termsAndConditions: 'xx.....',
    },
    // Add more policy objects as needed
  ];

  const styles = {
    pageContainer: {
      backgroundColor: '#c6c1cf', // Background color for the entire page
      minHeight: '100vh',
      padding: '20px',
    },
    policyContainer: {
      backgroundColor: 'white', // Background color for the policy container
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      marginTop: '50px'
    },
    leftContent: {
      flex: 1,
    },
    rightContent: {
      flex: 1,
      marginLeft: '20px',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <div style={styles.policyContainer}>
        <div style={styles.leftContent}>
          <div>
            <p>
              <strong>Policy Name: {policyData[0].policyName} </strong>
            </p>
            <p>
              <strong>Applicable Age: {policyData[0].applicableAge} </strong>
            </p>
            <p>
              <strong>Number of Years Plan: {policyData[0].numberOfYearsPlan} </strong>
            </p>
            <p>
              <strong>Claim Amount: {policyData[0].claimAmount} </strong>
            </p>
          </div>
        </div>
        <div style={styles.rightContent}>
          <div>
            <p>
              <strong>Policy Details: {policyData[0].policyDetails} </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>Terms and Conditions: {policyData[0].termsAndConditions} </strong>
            </p>
          </div>
          <div>
            <div>
              <p>
                <strong>Terms and Conditions: {policyData[0].termsAndConditions} </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAppliedPolicy;
