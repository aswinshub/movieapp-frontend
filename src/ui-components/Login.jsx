import {  Box, Button, Grid,TextField, Typography } from '@mui/material';


const Login = () => {

  return (
    <div >





  <Grid item xs={12} md={12} lg={12} >
  <Box boxShadow={ 3} padding={"20px 60px"} width={'500px'} height={'400px'} borderRadius={'5px'}>

<Typography variant="h3" style={{ color: "Black",textAlign:'center' }}>
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
