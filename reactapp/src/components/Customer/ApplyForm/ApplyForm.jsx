import React, { useState } from 'react';

export default function ApplyForm() {
  const [editDocumentType, setEditDocumentType] = useState('');
  const [editName, setEditName] = useState('');

  const handleEditDocumentTypeChange = (event) => {
    setEditDocumentType(event.target.value);
  };

  const handleEditNameChange = (event) => {
    setEditName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from submitting normally
    // Here, you can handle the form submission logic, e.g., sending data to a server
    // or performing any other actions.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="my-0" style={{ paddingLeft: '350px', border: '2px solid black', backgroundColor: '#c6c1cf' }}>
          <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              value={editName}
              id="editName" // Add an id for the label to associate with
              onChange={handleEditNameChange}
              data-testid="customerName"
            />
            <label htmlFor="editName">Enter Applicant Name</label>
          </div>

          <div className="my-5 mx-5 form-floating">
            <p style={{ fontWeight: 'bold' }}>Upload documents(Mandatory*)</p>
            <label htmlFor="editDocumentType">Select Document Type</label>
            <select
              placeholder="Please pick a type"
              id="editDocumentType"
              value={editDocumentType}
              onChange={handleEditDocumentTypeChange}
              required
              style={{ border: '1px solid black', width: '30%' }}
              data-testid="documentsType"
            >
              <option value="user">Aadhar</option>
              <option value="admin">Pan</option>
            </select>
          </div>

          <div>
            <button type="submit" data-testid="submitFormButton">
              Upload Documents
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

