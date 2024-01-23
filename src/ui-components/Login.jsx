import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react'

const Login = () => {
  return (
    <div style={{ margin: "10% 35%", textAlign: "center" }}>


<Grid container spacing={2}>
  <Grid item xs={12} md={12}>
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
      <Button sx={{padding:'10px 0'}}
        variant="contained"
        color="primary"
        fullWidth
        // onClick={submitForm}
      >
        Login
      </Button>
      <br />
      <br />
      

</Box>
  </Grid>

</Grid>



    </div>
  )
}

export default Login
