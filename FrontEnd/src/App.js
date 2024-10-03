import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PropertyList from './pages/PropertyList'; 
import PropertyDetails from './pages/PropertyDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GlobalStyles from './GlobalStyles';
import {jwtDecode} from 'jwt-decode'; 

const App = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.username); 
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    } 
  }, []); 

  return (
    <Router>
      <GlobalStyles />
      <Navbar username={username} />
      <Routes>
        <Route path="/" element={<PropertyList />} /> 
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
};

export default App;
