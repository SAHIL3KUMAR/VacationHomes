import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        alert('Registration successful! You can now log in.');
        navigate('/login'); 
      }
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <Container>
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
      </Form>
      <SwitchLink onClick={() => navigate('/login')}>Already have an account? Login here.</SwitchLink>
    </Container>
  );
};

export default Register;
