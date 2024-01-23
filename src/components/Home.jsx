import React from 'react'
import "./style.css";
import { Grid } from '@mui/material';
import bannerImage from './banner.png';

const Home = () => {
  return (
    <div>
<main>
<section className="banner-container">
          <div className="container">
<Grid container spacing={0}>
  <Grid item xs={12} md={7}>

            <div className="left-section">
              <h1>Book Your <br /> Tickets Now!</h1>
          <br />

              <button> Login</button>
            </div>
       
  </Grid>
  <Grid item xs={12} md={5} >
  <div className="right-section">
  <img src={bannerImage} alt=""  height={"600px"} width={"600px"}/>
  </div>
  </Grid>

</Grid>

</div>
        </section>  


        <div className='body-section'>



        </div>
       
      </main>

      
    </div>
  )
}

export default Home
