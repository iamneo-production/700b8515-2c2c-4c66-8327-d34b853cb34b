import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you want to make the signup request
    axios.post('https://8080-dbdecfdfcdefbfbfaacdedbbaffaccbcbcbbd.project.examly.io/auth/user/signup', userData)
      .then((response) => {
        // Handle the successful signup response here (e.g., redirect to another page)
        console.log('Signup successful', response.data);
        // Redirect to the next page after successful signup (you can use history.push here)
      })
      .catch((error) => {
        // Handle errors (e.g., display error message)
        console.error('Signup failed', error);
        setErrorMessage('Error occurred during signup.'); // Set the error message state
      });
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
          />
          <label htmlFor="mobilenumber">Enter Mobile Number</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ width: '60%', border: '2px solid black' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Leave a comment here"
            id="mobilenumber"
            autoComplete="on"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="mobilenumber">Enter Adress</label>
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
        {errorMessage && <div style={{ color: 'red', paddingLeft: '280px' }}>{errorMessage}</div>} {/* Render error message if present */}
        <div style={{ paddingLeft: '270px', fontSize: 25 }}>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'blue', border: 'none', backgroundColor: '#c6c1cf' }}
            onClick={handleSignup} // Call the handleSignup function on button click
          >
            <Link to ="/Userviewpolicy" >Sign Up</Link>
          </button>
        </div>
        <div style={{ paddingLeft: '270px', fontSize: 25 }}>
          <strong className='mx-2' style={{ fontSize: 20 }}>Already a User?</strong>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'blue', border: 'none', backgroundColor: '#c6c1cf' }}
            id="login"
          >
            <Link to="/login">Log in</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
