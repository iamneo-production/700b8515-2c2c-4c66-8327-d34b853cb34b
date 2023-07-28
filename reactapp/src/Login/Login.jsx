import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Reset the error message state
    setErrorMessage('');

    // Perform any necessary data validation here before making the API request
    const userData = {
      email: email,
      password: password,
    };

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you want to make the login request
    axios.post('https://8080-dbdecfdfcdefbfbfaacdedbbaffaccbcbcbbd.project.examly.io/auth/signin', userData)
      .then((response) => {
        // Handle the successful login response here (e.g., redirect to another page)
        console.log('Login successful', response.data);
        // Redirect to the next page if login is successful
        // You can use history.push('/Userviewpolicy') here if you want to navigate programmatically.
      })
      .catch((error) => {
        // Handle errors (e.g., display error message)
        console.error('Login failed', error);
        setErrorMessage('Invalid email or password.'); // Set the error message state
      });
  };

  return (
    <div style={{ zoom: '110%' }}>
      <div style={{ color: 'white', backgroundColor: '#42618f', border: '2px solid black', fontSize: 25, paddingBottom: '10px' }}>
        <strong style={{ paddingRight: '400px' }}>Life Insurance</strong> Login
      </div>
      <div className="my-0" style={{ paddingLeft: '280px', border: '2px solid black', backgroundColor: '#c6c1cf', paddingBottom: '380px' }}>
        <div className="my-5 mx-5 form-floating mb-5" style={{ width: '60%', border: '2px solid black' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Leave a comment here"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Enter email</label>
        </div>
        <div className="my-5 mx-5 form-floating" style={{ width: '60%', border: '2px solid black' }}>
          <input
            type="password"
            className="form-control"
            placeholder="Leave a comment here"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Enter Password</label>
        </div>
        {errorMessage && <div style={{ color: 'red', paddingLeft: '280px' }}>{errorMessage}</div>} {/* Render error message if present */}
        <div style={{ paddingLeft: '270px', fontSize: 25, paddingBottom: '50px' }}>
          <Link to={errorMessage ? '/Signup' : '/Userviewpolicy'}>
            <button
              type="button"
              className="btn btn-outline-dark btn-lg"
              style={{ backgroundColor: '#42618f', textDecoration: 'none', color: 'white' }}
              id="loginButton"
              onClick={handleLogin}
            >
              Login
            </button>
          </Link>
          <strong className="mx-2" style={{ fontSize: 20 }}>New User/Admin?</strong>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'blue', border: 'none', backgroundColor: '#c6c1cf' }}
            id="signupLink"
          >
            <Link to="/Signup">User Sign Up</Link>
            <div className="mx-2">
              <Link to="/Adminsignup">Admin Sign Up</Link>
            </div>
            
          </button>
        </div>
      </div>
    </div>
  );
}