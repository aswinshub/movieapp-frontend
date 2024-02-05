import { Box, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Headeradm from './Headeradm'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



const Adminform = (props) => {
  const [form, setForm] = useState({
    moviename: "",
    imgurl: "",
    catogary: "",
    language: "",
    cast: "",
    discription: "",
    rate: "",
    nooftickets: ""
  });

  const navigate = useNavigate();
  const { _id } = useParams();

  useEffect(() => {
    if (props.method === "put" && _id) {
  
      axios.get(`http://localhost:4004/movie/${_id}`)
        .then((response) => {
          const movieData = response.data;
          setForm({
            moviename: movieData.moviename || "",
            imgurl: movieData.imgurl || "",
            catogary: movieData.catogary || "",
            language: movieData.language || "",
            cast: movieData.cast || "",
            discription: movieData.discription || "",
            rate: movieData.rate || "",
            nooftickets: movieData.nooftickets || ""
          });
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    }
  }, [props.method, _id]);

  function submitform() {
    if (props.method === "put") {
      axios.put(`http://localhost:4004/movie/edit/${_id}`, form)
        .then((response) => {
          if (response.data === "Updated successfully") {
            alert(response.data);
            window.location.reload(false);
          } else {
            alert("not updated");
          }
        })
        .catch((error) => {
          console.error("Error updating movie data:", error);
        });
    } else {
      axios.post('http://localhost:4004/movie/add', form)
        .then((res) => {
          alert(res.data);
        })
        .catch((error) => {
          console.error("Error adding movie data:", error);
        });
    }
    navigate("/admin");
  }

  return (
    <div >

        <Headeradm/>
<br /><br /><br /><br />
        <h2>Add Movie</h2>

        <Box boxShadow={3} padding={'50px 80px'} marginLeft={" 14%"} width={'70%'} height={'90%'} borderRadius={'5px'}>


        <Grid container spacing={0} sx={{marginTop:'15px'}}>

  
  <Grid sx={{ marginBottom:'15px', paddingRight:'5px'}}  xs={12} md={6} lg={6} >
  <TextField
  variant="outlined"
  fullWidth
  label="Movie Name"
  name="movie"
  value={form.moviename}

  onChange={(e) => {
    setForm({ ...form, moviename: e.target.value });
  }}
/>
<br />   <br />
<TextField
  variant="outlined"
  required
  fullWidth
  label="Image URL"
  name="imgurl"
  onChange={(e) => {
    setForm({ ...form, imgurl: e.target.value });
  }}
/>
<br />   <br />
<TextField
  variant="outlined"
  fullWidth
  label="Catogary"

  name="catogary"
  onChange={(e) => {
    setForm({ ...form, catogary: e.target.value });
  }}
/>
<br />   <br />
<TextField
  variant="outlined"
  fullWidth
  label="Language"
  name="language"
  onChange={(e) => {
    setForm({ ...form, language: e.target.value });
  }}
/>
  </Grid>
 


  <Grid   xs={12} md={6} lg={6} >

  
  <TextField
  variant="outlined"
  fullWidth
  label="Cast"
  name="cast"
  onChange={(e) => {
    setForm({ ...form, cast: e.target.value });
  }}
/>
<br />   <br />
<TextField
  variant="outlined"
  fullWidth
  label="Discription"
  name="discription"
  onChange={(e) => {
    setForm({ ...form, discription: e.target.value });
  }}
/>
<br />   <br />
<TextField
  variant="outlined"
  fullWidth
  label="Ticket Rate"

  name="rate"
  onChange={(e) => {
    setForm({ ...form, rate: e.target.value });
  }}
/>
<br />   <br />
<TextField
  variant="outlined"
  fullWidth
  label="No of Tickets"
  name="noofticket"
  onChange={(e) => {
    setForm({ ...form, nooftickets: e.target.value });
  }}
/>
  </Grid>

 

</Grid>
<br />

 <Grid item lg={12} sx={{paddingRight:'20px'}}>
 <button className='credbtn'      onClick={submitform}> Add  </button>

 
  </Grid>


        </Box>


      
    </div>
  )
}

export default Adminform
