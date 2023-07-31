import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div data-testid="loginBox" style={{ zoom: '110%' }}>
      <div style={{ color: 'white', backgroundColor: '#42618f', border: '2px solid black', fontSize: 25, paddingBottom: '10px' }}>
        <strong style={{ paddingRight: '400px' }}>Life Insurance</strong> Login
      </div>
      <div className="my-0" style={{ paddingLeft: '280px', border: '2px solid black', backgroundColor: '#c6c1cf', paddingBottom: '200px' }}>
        <div className="my-5 mx-5 form-floating mb-5" style={{ width: '60%', border: '2px solid black' }}>
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
        <div style={{ paddingLeft: '270px', fontSize: 25 }}>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'blue', border: 'none', backgroundColor: '#c6c1cf' }}
            data-testid="loginButton"
          >
            Login
          </button>
        </div>
        <div style={{ paddingLeft: '270px', fontSize: 25 }}>
          <strong className='mx-2' style={{ fontSize: 20 }}>New User?</strong>
          <button
            type="button"
            className="btn btn-outline-dark btn-lg"
            style={{ color: 'blue', border: 'none', backgroundColor: '#c6c1cf' }}
            data-testid="signupLink"
          >
            <Link to="/">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
