import React from 'react'
import "./style.css";
import { Grid } from '@mui/material';
import bannerImage from './banner.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
<main>
<section className="banner-container">
          <div className="container">
<Grid container spacing={0}>
  <Grid item xs={12} md={12} lg={6} >

            <div className="left-section">
              <h1>Book Your <br /> Tickets Now!</h1>
          <br />

              <button> Login</button>
            </div>
       
  </Grid>
  <Grid item xs={12} md={12} lg={6} >
  <div className="right-section">
  <img src={bannerImage} alt=""  height={"600px"} width={"600px"}/>
  </div>
  </Grid>

</Grid>

</div>
        </section>  


        <div className='body-section'>
        <div className="card">
          <div className="card-item">
            <Link to="/signup">
              {" "}
              <img
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
                alt=""
              />
            </Link>

            <br />
            <h4>Internship in AI & Machine Learning</h4>
          </div>
          <div className="card-item">
            <Link to="/signup">
              {" "}
              <img
                src="https://www.netcov.com/wp-content/pubfiles/2022/07/shutterstock_1092829541.jpg"
                alt=""
              />
            </Link>
            <br />
            <h4>Internship in Cyber Security</h4>
          </div>
          <div className="card-item">
            <Link to="/signup">
              {" "}
              <img
                src="https://wallpapers.com/images/high/data-science-business-information-m8dmd67am39ybvhs.webp"
                alt=""
              />
            </Link>
            <br />
            <h4>Internship in Data science</h4>
          </div>
        </div>
     


        </div>
       
      </main>

      
    </div>
  )
}

export default Home
