import React, { useState } from 'react';
import FileUpload from '../FileUpload';
import Navbar from '../Navbar';

export default function Admineditapplicants() {
  const [editDocumentType, setEditDocumentType] = useState('');
  const [editName, setEditName] = useState('');
  const [editAddress, setEditAddress] = useState('');
  const [editMobile, setEditMobile] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editAadharNo, setEditAadharNo] = useState('');
  const [editApplicantAge, setEditApplicantAge] = useState('');
  const [editId, setEditId] = useState('');

  const handleEditDocumentTypeChange = (event) => {
    setEditDocumentType(event.target.value);
  };

  const handleEditNameChange = (event) => {
    setEditName(event.target.value);
  };

  const handleEditAddressChange = (event) => {
    setEditAddress(event.target.value);
  };

  const handleEditMobileChange = (event) => {
    setEditMobile(event.target.value);
  };

  const handleEditEmailChange = (event) => {
    setEditEmail(event.target.value);
  };

  const handleEditAadharNoChange = (event) => {
    setEditAadharNo(event.target.value);
  };

  const handleEditApplicantAgeChange = (event) => {
    setEditApplicantAge(event.target.value);
  };

  const handleEditIdChange = (event) => {
    setEditId(event.target.value);
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
            id="editName"
            value={editName}
            onChange={handleEditNameChange}
          />
          <label htmlFor="editName">Enter Applicant Name</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editAddress"
            value={editAddress}
            onChange={handleEditAddressChange}
          />
          <label htmlFor="editAddress">Enter Applicant Address</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editMobile"
            value={editMobile}
            onChange={handleEditMobileChange}
          />
          <label htmlFor="editMobile">Enter Applicant Mobile</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editEmail"
            value={editEmail}
            onChange={handleEditEmailChange}
          />
          <label htmlFor="editEmail">Enter Applicant Email Id</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editAadharNo"
            value={editAadharNo}
            onChange={handleEditAadharNoChange}
          />
          <label htmlFor="editAadharNo">Enter Applicant Aadhaar No</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editApplicantAge"
            value={editApplicantAge}
            onChange={handleEditApplicantAgeChange}
          />
          <label htmlFor="editApplicantAge">Enter Applicant age</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="editId"
            value={editId}
            onChange={handleEditIdChange}
          />
          <label htmlFor="editId">Applicants insurance ongoing id</label>
        </div>
        <div className="my-5 mx-5 form-floating">
          <p style={{ fontWeight: 'bold' }}>Upload documents(Mandatory*)</p>
          <label htmlFor="editDocumentType"></label>
          <select
            placeholder="Please pick a type"
            id="editDocumentType"
            value={editDocumentType}
            onChange={handleEditDocumentTypeChange}
            required
            style={{ border: '1px solid black', width: '30%' }}
          >
            <option value="user">Aadhar</option>
            <option value="admin">Pan</option>
          </select>
        </div>
        <div>
          <FileUpload />
        </div>
        <div className="my-5 mx-5 form-floating" style={{ paddingLeft: '650px' }}>
          <button type="submit" id="updateButton">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
