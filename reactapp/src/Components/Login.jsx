import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Logo from './logo.png';
import styles from './Login.module.css'; // Import the CSS file for Login component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Access the history object

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setEmail('');
    setPassword('');

    // Check if the password is correct
    const isPasswordCorrect = checkPasswordValidity(password);

    if (isPasswordCorrect) {
      navigate('/Viewpolicy');
    } else {
      alert('Incorrect password! Please try again.');
    }
  };

  const handleLogin = () => {
    // Add login functionality here
    console.log('Logging in...', email, password);
  };

  const checkPasswordValidity = (password) => {
    // Password validation rules: 8 letters, 1 capital letter, 1 special character, 2 numbers
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.loginheader}>
        <div className={styles.logocontainer}>
          <img src={Logo} alt="Logo" className={styles.logo}/>
        </div>
        <h1>Login</h1>
      </nav>

      <div className={styles.loginbody}>
        <form className={styles.loginform} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"></label>
            <input
              placeholder='Email'
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              placeholder='password'
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <p>New user? <Link to="/signup">Sign up</Link></p>
        </form>
      </div>
    </div>
  );
  
};

export default Login;