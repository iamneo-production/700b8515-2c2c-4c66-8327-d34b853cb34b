import React, { useState } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
export default function Userprofile() {
  const [enterName, setEnterName] = useState('');
  const [enterAddress, setEnterAddress] = useState('');
  const [enterMobile, setEnterMobile] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterAadharNo, setEnterAadharNo] = useState('');
  const [enterPanNo, setEnterPanNo] = useState('');
  const [enterpassword, setEnterpassword] = useState('');

  const handleEnterNameChange = (event) => {
    setEnterName(event.target.value);
  };

  const handleEnterAddressChange = (event) => {
    setEnterAddress(event.target.value);
  };

  const handleEnterMobileChange = (event) => {
    setEnterMobile(event.target.value);
  };

  const handleEnterEmailChange = (event) => {
    setEnterEmail(event.target.value);
  };

  const handleEnterAadharNoChange = (event) => {
    setEnterAadharNo(event.target.value);
  };

  const handleEnterPanNoChange = (event) => {
    setEnterPanNo(event.target.value);
  };

  const handleEnterPasswordChange = (event) => {
    setEnterpassword(event.target.value);
  };
  const handleSubmit = () => {
    // Prepare the data to be sent to the server
    const data = {
        name:enterName,
        email:enterEmail,
        password:enterpassword,
        phoneNumber:enterMobile,
        address:enterAddress,
    };

    // Make a POST request to your server endpoint using Axios
    axios.post('https://8080-dbdecfdfcdefbfbfaacdedbbaffaccbcbcbbd.project.examly.io/users/add', data)
      .then((response) => {
        // Handle the response from the server if needed
        console.log(response.data);
        alert('You have successfully applied for an Insurance policy!');
      })
      .catch((error) => {
        // Handle any error that occurred during the request
        console.error(error);
      });
  };

  const showAlert = () => {
    alert('You have successfully applied for an Insurance policy!');
  };
  const handleOnClick = () => {
    handleSubmit();
    showAlert();
  };
   
  return (
    <div>
      <Navbar
        title1="View policy"
        title2="Profile"
        title3="My policy"
        id1="userViewPolicy"
        id2="profile"
        id3="userMyPolicy"
        l1="/Userviewpolicy"
        l2="/Userprofile"
        l3="/Userappliedpolicy"
      />
      <div
        className="my-0"
        style={{ paddingLeft: '350px', border: '2px solid black', backgroundColor: '#c6c1cf' }}
      >
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="enterName"
            value={enterName}
            onChange={handleEnterNameChange}
          />
          <label htmlFor="enterName">Enter Applicant Name</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="enterAddress"
            value={enterAddress}
            onChange={handleEnterAddressChange}
          />
          <label htmlFor="enterAddress">Enter Applicant Address</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="enterMobile"
            value={enterMobile}
            onChange={handleEnterMobileChange}
          />
          <label htmlFor="enterMobile">Enter Applicant Mobile</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="enterEmail"
            value={enterEmail}
            onChange={handleEnterEmailChange}
          />
          <label htmlFor="enterEmail">Enter Applicant Email Id</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="enterAadharNo"
            value={enterAadharNo}
            onChange={handleEnterAadharNoChange}
          />
          <label htmlFor="enterAadharNo">Enter Applicant Aadhar No</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="enterPanNo"
            value={enterPanNo}
            onChange={handleEnterPanNoChange}
          />
          <label htmlFor="enterPanNo">Enter Applicant age</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="enterpassword"
            value={enterpassword}
            onChange={handleEnterPasswordChange}
          />
          <label htmlFor="enterId">Enter password</label>
        </div>
        <div style={{ paddingLeft: '430px', fontSize: 25, paddingBottom: '50px' }}>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'white', backgroundColor: '#42618f' }}
            onClick={handleOnClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
