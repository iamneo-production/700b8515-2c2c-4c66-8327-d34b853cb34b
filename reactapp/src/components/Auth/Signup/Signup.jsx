import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSignup = () => {
    // Perform any necessary data validation here before making the API request
    const userData = {
      name: username,
      email: email,
      phoneNumber: mobilenumber,
      password: password,
      confirmpassword: confirmpassword,
      address: address,
    };

    // Call the signup API here with the userData object (you may use axios or any other method)
    // For testing purposes, we can just console log the userData here
    console.log(userData);
  };

  return (
    <div style={{ zoom: '110%' }}>
      <div style={{ color: 'white', backgroundColor: '#42618f', border: '2px solid black', fontSize: 25, paddingBottom: '10px' }}>
        <strong style={{ paddingRight: '400px' }}>Life Insurance</strong> Sign up
      </div>
      <div className="my-0" style={{ paddingLeft: '280px', border: '2px solid black', backgroundColor: '#c6c1cf', paddingBottom: '200px' }}>
        <div className="my-5 mx-5 form-floating mb-5" style={{ width: '60%', border: '2px solid black' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Leave a comment here"
            id="username"
            autoComplete="on"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-testid="username"
          />
          <label htmlFor="username">Enter Username</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ width: '60%', border: '2px solid black' }}>
          <input
            type="email"
            className="form-control"
            placeholder="Leave a comment here"
            id="email"
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email"
          />
          <label htmlFor="email">Enter Email</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ width: '60%', border: '2px solid black' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Leave a comment here"
            id="mobilenumber"
            autoComplete="on"
            value={mobilenumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            data-testid="mobileNumber"
          />
          <label htmlFor="mobilenumber">Enter Mobile Number</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ width: '60%', border: '2px solid black' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Leave a comment here"
            id="address"
            autoComplete="on"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="mobilenumber">Enter Address</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ width: '60%', border: '2px solid black' }}>
          <input
            type="password"
            className="form-control"
            placeholder="Leave a comment here"
            id="password"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ width: '60%', border: '2px solid black' }}>
          <input
            type="password"
            className="form-control"
            placeholder="Leave a comment here"
            id="confirmpassword"
            autoComplete="on"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="confirmpassword">Confirm password</label>
        </div>
        <div style={{ paddingLeft: '270px', fontSize: 25 }}>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'blue', border: 'none', backgroundColor: '#c6c1cf' }}
            onClick={handleSignup} // Call the handleSignup function on button click
            data-testid="submitButton"
          >
            <Link to ="/" >Sign Up</Link>
          </button>
        </div>
        <div style={{ paddingLeft: '270px', fontSize: 25 }}>
          <strong className='mx-2' style={{ fontSize: 20 }}>Already a User?</strong>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'blue', border: 'none', backgroundColor: '#c6c1cf' }}
            id="login"
            data-testid="signinLink"
          >
            <Link to="/">Log in</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
