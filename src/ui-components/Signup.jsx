import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Signup = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneno: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    phoneno: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Reset the corresponding error when the user types in the field
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: '', email: '', password: '', phoneno: '' };
  
    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }
  
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
  
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/.test(formData.password)
    ) {
      newErrors.password =
        'Password must be 8-12 characters and include at least one uppercase letter, one lowercase letter, and one digit';
      isValid = false;
    }
  
    // Phone number validation (you can customize the validation logic)
    if (!formData.phoneno) {
      newErrors.phoneno = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneno)) {
      newErrors.phoneno = 'Invalid phone number';
      isValid = false;
    }
  
    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:4004/user/add', formData);
        console.log(response.data.message); // Display success message from the backend
        alert(response.data.message)
        navigate('/login');

      } catch (error) {
        console.error('Error during signup:', error.message);
        alert( 'Error during signup')
      }
    }
  };

  return (
    <div>
      <Header />
      <Grid sx={{ justifyContent: 'center', display: 'flex', marginTop: '8em' }} item xs={12} md={12} lg={12}>
        <Box boxShadow={3} padding={'20px 60px'} width={'500px'} height={'auto'} borderRadius={'5px'}>
          <Typography variant="h3" style={{ color: 'Black', textAlign: 'center' }}>
            Sign Up
          </Typography>
          <br />
          <br />
          <TextField
  variant="outlined"
  fullWidth
  label="Username"
  name="username"
  value={formData.username}
  onChange={handleInputChange}
  error={!!errors.username}
  helperText={errors.username}
/>
<br />   <br />
<TextField
  variant="outlined"
  fullWidth
  label="Email"
  name="email"
  value={formData.email}
  onChange={handleInputChange}
  error={!!errors.email}
  helperText={errors.email}
/>
<br />   <br />
<TextField
  variant="outlined"
  fullWidth
  label="Password"
  type="password"
  name="password"
  value={formData.password}
  onChange={handleInputChange}
  error={!!errors.password}
  helperText={errors.password}
/>
<br />   <br />
<TextField
  variant="outlined"
  fullWidth
  label="Phone No"
  name="phoneno"
  value={formData.phoneno}
  onChange={handleInputChange}
  error={!!errors.phoneno}
  helperText={errors.phoneno}
/>
          <br />
          <br />
          <button fullWidth
            className="credbtn"
        
            onClick={handleSubmit}
          >
       Register
          </button>
          <br />
          <br />
        </Box>
      </Grid>
    </div>
  );
};

export default Signup;
