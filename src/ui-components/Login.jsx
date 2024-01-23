import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const Login = () => {
  const [error, setError] = useState('');
  const paperStyle = { padding: 20, width: '100%', maxWidth: 400, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#005A92' };
  const buttonStyle = { margin: '15px 0', backgroundColor: "#005A98", color: 'white' };
  return (
    <div >


<br /><br /><br /><br /><br /><br />



  <Grid item xs={12} md={12} lg={12}>
  <Box boxShadow={ 3} padding={"20px 60px"} width={'500px'} height={'400px'} borderRadius={'5px'}>

<Typography variant="h3" style={{ color: "Black" }}>
        Login
      </Typography>
      <br />
      <br />
      <TextField
        variant="outlined"
        fullWidth
        label="Username"
        name="username"
        // onChange={(e) => {
        //   setForm({ ...form, email: e.target.value });
        // }}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        fullWidth
        label="Password"
        type="password"
        name="password"
        // onChange={(e) => {
        //   setForm({ ...form, password: e.target.value });
        // }}
      />
      <br />
      <br />
      <Button  sx={{padding:'10px 0', background:'green' }}
        variant="contained"
       
        fullWidth
        // onClick={submitForm}
      >
        Login
      </Button>
      <br />
      <br />
      

</Box>
  </Grid>





    </div>
  )
}

export default Login
