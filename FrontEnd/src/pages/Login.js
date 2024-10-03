// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: inline-block;
  text-align: left;
`;

const Input = styled.input`
  margin: 10px 0;
  width: 100%;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SwitchLink = styled.button`
  margin-top: 20px;
  background: none;
  border: none;
  color: #007BFF;
  cursor: pointer;
  font-size: 16px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, { email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); 
        alert('Login Successful!');
        navigate('/dashboard'); 
      }
    } catch (error) {
      alert('Login Failed. Please check your credentials.');
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </Form>
      <SwitchLink onClick={() => navigate('/register')}>`Don't` have an account? Register here.</SwitchLink>
    </Container>
  );
};

export default Login;
