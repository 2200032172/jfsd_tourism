import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Importing the updated CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', { username, password });
            if (response.data.success) {
                setMessage("Login successful!");
            } else {
                setError("Login failed. Please check your username or password.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="wrapper animated bounce">
          <h1>Travel</h1>
          <hr />
          <form>
            <label id="icon" htmlFor="username">
              <i className="fa fa-user"></i>
            </label>
            <input type="text" placeholder="Username" id="username" />
            
            <label id="icon" htmlFor="password">
              <i className="fa fa-key"></i>
            </label>
            <input type="password" placeholder="Password" id="password" />
            
            <input type="submit" value="Sign In" />
            <hr />
            <div className="crtacc">
              <a href="register">Create Account</a>
            </div>
          </form>
        </div>
      );
    };
    
    

export default Login;
