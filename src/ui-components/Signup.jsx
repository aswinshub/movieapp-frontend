import React from 'react'
import {  Box, Button, Grid,TextField, Typography } from '@mui/material';


const Signup = () => {
  return (
    <div>
 <Grid sx={{justifyContent:"center",display:'flex' , marginTop:"8em"}} item xs={12} md={12} lg={12} >
  <Box boxShadow={ 3} padding={"20px 60px"} width={'600px'} height={'auto'} borderRadius={'5px'}>

<Typography variant="h3" style={{ color: "Black" , textAlign:'center' }}>
        Sign Up
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
        label="Email"
        name="email"
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
      <TextField
        variant="outlined"
        fullWidth
        label="Phone No"
        name="phoneno"
        // onChange={(e) => {
        //   setForm({ ...form, email: e.target.value });
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

export default Signup
