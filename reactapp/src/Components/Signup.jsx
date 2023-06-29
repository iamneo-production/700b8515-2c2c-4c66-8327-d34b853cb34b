import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Logo from './logo.png';
import styles from "./Signup.module.css";
const Signup = () => {
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validatePassword = (password) => {
    // Password validation rules: 8 letters, 1 capital letter, 1 special character, 2 numbers
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

     // Perform password validation
    if (!validatePassword(password)) {
      alert('Password must contain 8 letters, 1 capital letter, 1 special character, and 2 numbers');
      return;
    }

    // Perform signup logic here
    console.log('Role:', role);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Reset the form
    setRole('');
    setName('');
    setEmail('');
    setMobileNumber('');
    setPassword('');
    setConfirmPassword('');

    // Redirect to Login page after successful signup
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <nav className={styles.Signupheader}>
        <div className={styles.logocontainer}>
          <img src={Logo} alt="Logo" className={styles.logo}/>
        </div>
        <h1>Signup</h1>
      </nav>
      <div className={styles.Signupbody}> 
        <form className={styles.signupform} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="role"></label>
            <select placeholder='Enter Admin/User' id="role" value={role} onChange={handleRoleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label htmlFor="name"></label>
            <input placeholder='Enter Username' type="text" id="name" value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input placeholder='Enter Email' type="email" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label htmlFor="mobileNumber"></label>
            <input
              placeholder='Enter Mobile Number'
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              placeholder='Password'
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword"></label>
            <input
              placeholder='Confirm Password'
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <p>Already a user? <Link to="/login">Log in</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;