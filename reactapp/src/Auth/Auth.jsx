import React, { useState } from 'react';

export default function Auth() {
  const [adminUser, setAdminUser] = useState('');
  const [email, setEmail] = useState('');

  const handleAdminUserChange = (event) => {
    setAdminUser(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container my-5">
      <div style={{ color: 'white', backgroundColor: '#42618f', textAlign: 'center', border: '2px solid black', fontSize: 25 }}>
        <bold>Register</bold>
      </div>
      <div className="my-0" style={{ paddingLeft: '350px', border: '2px solid black', backgroundColor: '#c6c1cf' }}>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="admin/user"
            value={adminUser}
            onChange={handleAdminUserChange}
          />
          <label htmlFor="admin/user">Enter admin/user</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ fontSize: 16, width: '60%', border: '2px solid black' }}>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">Enter email</label>
        </div>
      </div>
    </div>
  );
}
