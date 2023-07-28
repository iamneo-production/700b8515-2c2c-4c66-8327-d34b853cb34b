import React, { useState } from 'react';
import Navbar from '../Navbar';

export default function Admineditappliedpolicy() {
  const [policyName, setPolicyName] = useState('');
  const [applicableAge, setApplicableAge] = useState('');
  const [claimAmount, setClaimAmount] = useState('');
  const [noOfYearsPlan, setNoOfYearsPlan] = useState('');
  const [rateOfInterest, setRateOfInterest] = useState('');
  const [policyDetails, setPolicyDetails] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState('');

  const handleUpdatePolicy = () => {
    // Implement the logic for updating the policy here
    // You can access the form values using the state variables
    console.log('Policy Name:', policyName);
    console.log('Applicable Age:', applicableAge);
    console.log('Claim Amount:', claimAmount);
    console.log('No of Years Plan:', noOfYearsPlan);
    console.log('Rate of Interest:', rateOfInterest);
    console.log('Policy Details:', policyDetails);
    console.log('Terms and Conditions:', termsAndConditions);
  };

  return (
    <div>
      <Navbar
        title1="Add Policy"
        title2="Policy Details"
        title3="Applicant details"
        id1="userViewPolicy"
        id2="profile"
        id3="userMyPolicy"
        l1="/Adminaddpolicy"
        l2="/Adminappliedpolicy"
        l3="/Adminviewapplicants"
      />
      <div className="my-0" style={{ paddingLeft: '350px', border: '2px solid black', backgroundColor: '#c6c1cf' }}>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editpolicyName"
            value={policyName}
            onChange={(e) => setPolicyName(e.target.value)}
          ></textarea>
          <label htmlFor="editpolicyName">Enter Policy name</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editapplicableAge"
            value={applicableAge}
            onChange={(e) => setApplicableAge(e.target.value)}
          ></textarea>
          <label htmlFor="editapplicableAge">Enter applicable age</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editclaimAmount"
            value={claimAmount}
            onChange={(e) => setClaimAmount(e.target.value)}
          ></textarea>
          <label htmlFor="editclaimAmount">Enter claim amount</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editnoOfYearsPlan"
            value={noOfYearsPlan}
            onChange={(e) => setNoOfYearsPlan(e.target.value)}
          ></textarea>
          <label htmlFor="editnoOfYearsPlan">Enter no of years</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editrateOfInterest"
            value={rateOfInterest}
            onChange={(e) =>setRateOfInterest (e.target.value)}
          ></textarea>
          <label htmlFor="editrateOfInterest">Enter Rate Of Interest</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editpolicyDetails"
            value={policyDetails}
            onChange={(e) =>setPolicyDetails (e.target.value)}
          ></textarea>
          <label htmlFor="editpolicyDetails">Enter policy Details</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="edittermsAndConditions"
            value={termsAndConditions}
            onChange={(e) =>setTermsAndConditions (e.target.value)}
          ></textarea>
          <label htmlFor="edittermsAndConditions">Enter terms And Conditions</label>
        </div>
        {/* ... */}
        <div style={{ paddingLeft: '350px', fontSize: 25, paddingBottom: '50px' }}>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'white', backgroundColor: '#42618f' }}
            id="updatePolicyButton"
            onClick={handleUpdatePolicy}
          >
            Update policy
          </button>
        </div>
      </div>
    </div>
  );
}
