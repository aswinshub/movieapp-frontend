import { Box, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Headeradm from './Headeradm';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Adminform = () => {
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

  const [mode, setMode] = useState("Add"); // Default mode is "Add"
  const navigate = useNavigate();
  const { _id } = useParams();

  useEffect(() => {
    if (_id) {
      // Fetch movie details using _id
      axios.get(`http://localhost:4004/movie/${_id}`)
        .then((res) => {
          const movieData = res.data;
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
          setMode("Update"); // Set mode to "Edit" when editing existing movie
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    }
  }, [_id]);

  function submitForm() {
    if (mode === "Add") {
      // Add new movie
      axios.post('http://localhost:4004/movie/add', form)
        .then((res) => {
          alert(res.data);
          navigate("/admin");
        })
        .catch((error) => {
          console.error("Error adding movie data:", error);
        });
    } else if (mode === "Update" && _id) {
      // Update existing movie
      axios.put(`http://localhost:4004/movie/edit/${_id}`, form)
        .then((res) => {
          alert(res.data);
          navigate("/admin");
        })
        .catch((error) => {
          console.error("Error updating movie data:", error);
        });
    }
  }
  

  return (
    <div>
      <Headeradm />
      <br /><br /><br /><br />
      <h2>{`${mode} Movie`}</h2>

      <Box boxShadow={3} padding={'50px 80px'} marginLeft={" 14%"} width={'70%'} height={'90%'} borderRadius={'5px'}>
        <Grid container spacing={0} sx={{ marginTop: '15px' }}>
          <Grid sx={{ marginBottom: '15px', paddingRight: '5px' }} xs={12} md={6} lg={6}>
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
            <br /> <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Image URL"
              name="imgurl"
              value={form.imgurl}
              onChange={(e) => {
                setForm({ ...form, imgurl: e.target.value });
              }}
            />
            <br /> <br />
            <TextField
              variant="outlined"
              fullWidth
              label="Catogary"
              name="catogary"
              value={form.catogary}
              onChange={(e) => {
                setForm({ ...form, catogary: e.target.value });
              }}
            />
            <br /> <br />
            <TextField
              variant="outlined"
              fullWidth
              label="Language"
              name="language"
              value={form.language}
              onChange={(e) => {
                setForm({ ...form, language: e.target.value });
              }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Cast"
              name="cast"
              value={form.cast}
              onChange={(e) => {
                setForm({ ...form, cast: e.target.value });
              }}
            />
            <br /> <br />
            <TextField
              variant="outlined"
              fullWidth
              label="Discription"
              name="discription"
              value={form.discription}
              onChange={(e) => {
                setForm({ ...form, discription: e.target.value });
              }}
            />
            <br /> <br />
            <TextField
              variant="outlined"
              fullWidth
              label="Ticket Rate"
              name="rate"
              value={form.rate}
              onChange={(e) => {
                setForm({ ...form, rate: e.target.value });
              }}
            />
            <br /> <br />
            <TextField
              variant="outlined"
              fullWidth
              label="No of Tickets"
              name="noofticket"
              value={form.nooftickets}
              onChange={(e) => {
                setForm({ ...form, nooftickets: e.target.value });
              }}
            />
          </Grid>
        </Grid>
        <br />
        <Grid item lg={12} sx={{ paddingRight: '20px' }}>
          <button className='credbtn' onClick={submitForm}> {mode} </button>
        </Grid>
      </Box>
    </div>
  );
}

export default Adminform;