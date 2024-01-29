import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./style.css";
import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Rating, Typography } from "@mui/material";
import bannerImage from "./banner.png";
import { Link } from "react-router-dom";
import Header from "./Header";


const Home = () => {


  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4004/movie/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);






  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Header/>
      <main>
        <section className="banner-container">
          <div className="container">
            <Grid container spacing={0}>
              <Grid item xs={12} md={12} lg={6}>
                <div className="left-section">
                  <h1>
                    Book Your <br /> Tickets Now!
                  </h1>
                  <br />

                  <button>   <Link style={{textDecoration:'none'}} to={'/login'}>Login</Link> 

</button>


                  
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <div className="right-section">
                  <img
                    src={bannerImage}
                    alt=""
                    height={"600px"}
                    width={"600px"}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </main>

<h2>Movies</h2>

 <Divider/>

      <Grid container spacing={2} alignItems={"center"} textAlign={'center'} sx={{ marginTop:'20px', marginBottom:'20px', paddingLeft:'6em'}}>
      {data.map((val, i) => (
        
  
  <Grid item xs={12} md={6} lg={4} >
  <Box padding={"20px 60px"} width={'400px'} height={'400px'} borderRadius={'5px'}>

  <Box
      sx={{
        '& > legend': { mt: 2 },
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


          <button className="mbutton"> Book Tickets</button>
        </CardContent>
      </CardActionArea>
    </Card>
<br />
  
      {/* <Rating name="read-only" value={value} readOnly /> */}
     
    </Box>
  </Box>
  <br /><br /><br /> <br /><br /><br /><br />
  </Grid>

 
))}

</Grid>
    </div>
  );
};

export default Home;

