import React, { useState } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
export default function Adminaddpolicy() {
  const [policyId, setPolicyId] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [premium, setPremium] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleAddPolicy = () => {
    // Your Axios POST request code will go here
    // Replace the following console.log statements with your Axios code
    const userData = {
        policyId:policyId,
        name:name,
        description:description,
        coverageAmount:coverageAmount,
        premium:premium,
      };
  
    console.log('Policy Id:', policyId);
    console.log('Coverage Amount:', coverageAmount);
    console.log('Description:', description);
    console.log('Name:', name);
    console.log('Premium:', premium);
    axios.post('https://8080-dbdecfdfcdefbfbfaacdedbbaffaccbcbcbbd.project.examly.io/admin/createpolicy', userData)
    .then((response) => {
      // Handle the successful signup response here (e.g., redirect to another page)
      console.log('policy added successful', response.data);
      // Redirect to the next page after successful signup 
    })
    .catch((error) => {
      // Handle errors (e.g., display error message)
      console.error('policy hadnot added', error);
      setErrorMessage('Error occurred during adding.'); // Set the error message state
    });
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
      <div
        className="my-0"
        style={{ paddingLeft: '350px', border: '2px solid black', backgroundColor: '#c6c1cf' }}
      >
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="policyId"
            value={policyId}
            onChange={(e) => setPolicyId(e.target.value)}
          />
          <label htmlFor="policyId">Enter Policy Id</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Enter Name</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="coverageAmount"
            value={coverageAmount}
            onChange={(e) => setCoverageAmount(e.target.value)}
          />
          <label htmlFor="coverageAmount">Enter Coverage amount</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="description">Enter Description</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="premium"
            value={premium}
            onChange={(e) => setPremium(e.target.value)}
          />
          <label htmlFor="premium">Enter Premium</label>
        </div>
        {errorMessage && <div style={{ color: 'red', paddingLeft: '280px' }}>{errorMessage}</div>} {/* Render error message if present */}
        <div style={{ paddingLeft: '350px', fontSize: 25, paddingBottom: '50px' }}>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'white', backgroundColor: '#42618f' }}
            id="addPolicyButton"
            onClick={handleAddPolicy}
          >
            Add policy
          </button>
        </div>
      </div>
    </div>
  );
}
