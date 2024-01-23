import React from "react";
import "./style.css";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import bannerImage from "./banner.png";
import { Link } from "react-router-dom";

const Home = () => {

  const [value, setValue] = React.useState(2);
  return (
    <div>
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

                  <button> Login</button>
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



      <Grid container spacing={2} alignItems={"center"} textAlign={'center'} sx={{ marginTop:'20px', marginBottom:'20px', paddingLeft:'6em'}}>
  <Grid item xs={4}>
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
          height="200"
          image="https://i.redd.it/malaikottai-vaaliban-new-poster-v0-7j9jvslewd8c1.jpeg?s=d1be868de39007989a037e1d4e1233f2e5946ddf"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Malaikottai Vaaliban <br />

          </Typography>
          <Typography variant="body2" color="text.secondary">
          Category : U/A <br />
          Language : Malayalam <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
<br />
  
      <Rating name="read-only" value={value} readOnly />
     
    </Box>
  </Box>
  </Grid>


</Grid>
    </div>
  );
};

export default Home;
