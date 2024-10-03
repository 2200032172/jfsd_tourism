import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register'
import LandingPage from './Components/landingpage';
import HomePage from './Components/home';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} /> 
            <Route path="/landing" element={<LandingPage/>} /> 
            <Route path="/home" element={<HomePage/>} /> 
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
