

import React, { useEffect, useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Rating, Typography } from "@mui/material";

import axios from 'axios';



import Header from './Header';
import Headeruser from './Headeruser';

const User = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4004/movie/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);



  return (
    <div>
      


      <Headeruser/>
<br /><br /><br /><br /><br /> 

<h2 >User Dashboard</h2>

 <Divider/>

      <Grid container spacing={2} alignItems={"center"} textAlign={'center'} sx={{ marginTop:'20px', marginBottom:'20px', paddingLeft:'6em'}}>
      {data.map((val, i) => (
        
  
  <Grid item xs={12} md={6} lg={4} >
  <Box padding={"20px 60px"} width={'400px'} height={'500px'} borderRadius={'5px'}>

  <Box
      sx={{
        '& > legend': { mt:2} , 
      }} 
    >
  
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={val.imgurl}
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {val.moviename} <br />

          </Typography>
          <Typography variant="body2" color="text.secondary">
          Category :{val.catogary}<br />
          Language : {val.language} <br />
          </Typography>


          <button className="mbutton"> Book Tickets</button><br />
          

        </CardContent>
      </CardActionArea>
    </Card>
<br />
  
      {/* <Rating name="read-only" value={value} readOnly /> */}
     
    </Box>
  </Box>
  <br /><br /><br /> 
  </Grid>

 
))}

</Grid>
     
    </div>
  )
}

export default User
