import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

const Login = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Email validation
    if (!credentials.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Password validation
    if (!credentials.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const { email, password } = credentials;
  
  
        if (email === 'admin@gmail.com' && password === 'Admin123') {
        
          localStorage.setItem('token', 'adminToken'); 
          console.log('Admin login successful');
          alert('Admin login successful');
          navigate('/admin'); 
          return;
        }
  
        const response = await axios.post('http://localhost:4004/user/login', credentials);
        const { message, token } = response.data;
  
        if (message === 'success') {
          localStorage.setItem('token', token);
          console.log('User login successful');
          alert('User login successful');
          navigate('/user');
        } else {
          console.error('Login failed:');
          alert('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error.message);
        alert('Invalid Credentials');
      }
    }
  };
  
  return (
    <div>
      <Header />

      <Grid item sx={{ justifyContent: 'center', display: 'flex', marginTop: '8em' }} xs={12} md={12} lg={12}>
        <Box boxShadow={3} padding={'20px 60px'} width={'500px'} height={'400px'} borderRadius={'5px'}>
          <Typography variant="h3" style={{ color: 'Black', textAlign: 'center' }}>
            Login
          </Typography>
          <br />
          <br />

          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <br />
          <br />
          <button
            className="credbtn"
            sx={{ padding: '10px 0', background: 'green' }}
            variant="contained"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </button>
        
          <br />
          <Link style={{ textDecoration: 'none', color: 'black', fontFamily: 'arial' }} to={'/signup'}>
            Create a new account ?
          </Link>

          <br />
        </Box>
      </Grid>
    </div>
  );
};

export default Login;
