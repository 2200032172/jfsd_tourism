import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Reusing the same CSS

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', { 
                username, 
                email, 
                phone, 
                password 
            });
            if (response.data.success) {
                setMessage("Registration successful!");
            } else {
                setError("Registration failed. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="wrapper animated bounce">
            <h1>Register</h1>
            <hr />
            <form onSubmit={handleRegister}>
                {/* Username Field */}
                <label id="icon" htmlFor="username">
                    <i className="fa fa-user"></i>
                </label>
                <input 
                    type="text" 
                    placeholder="Username" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                
                {/* Email Field */}
                <label id="icon" htmlFor="email">
                    <i className="fa fa-envelope"></i>
                </label>
                <input 
                    type="email" 
                    placeholder="Email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                
                {/* Phone Number Field */}
                <label id="icon" htmlFor="phone">
                    <i className="fa fa-phone"></i>
                </label>
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                />

                {/* Password Field */}
                <label id="icon" htmlFor="password">
                    <i className="fa fa-key"></i>
                </label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                
                <input type="submit" value="Register" />
                <hr />
                <div className="crtacc">
                    <a href="/login">Already have an account? Sign In</a>
                </div>
            </form>
        </div>
    );
};

export default Registration;
