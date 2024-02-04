import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const Moviepage = () => {
  const { _id } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4004/movie/${_id}`)
      .then((res) => setMovieData(res.data))
      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <div>
      <Header />
      <div className='movie-d'>
        <br /><br /><br /><br /><br />
        <h2 className='dishead'>{movieData.moviename}</h2>
        <Grid container spacing={2} sx={{ paddingleft: '10em', paddingRight:'5em' }}>
          <Grid item xs={12} md={6} lg={6} sx={{ marginTop: '2em', paddingleft: '10em' }}>
            <TableContainer sx={{paddingRight:'10px'}} component={Paper}>
              <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Movie Name
                    </TableCell>
                    <TableCell align="right">{movieData.moviename}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Discription
                    </TableCell>
                    <TableCell align="right">{movieData.discription}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Cast Details
                    </TableCell>
                    <TableCell align="right">{movieData.cast}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Movie Reviews
                    </TableCell>
                    <TableCell align="right">{movieData.reviews}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item  xs={12} md={6} lg={6} sx={{ marginTop: '2em' }}>
            <Box padding={"20px 60px"} width={'100%'} height={'500px'} borderRadius={'5px'}>
              <Box className="discrip"
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Card sx={{ maxWidth: 600 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={movieData.imgurl}
                    />
                    <CardContent>
                      {/* Additional content if needed */}
                    </CardContent>
                  </CardActionArea>
                </Card>
                <br />
              </Box>
              <Link to={'/login'}><button className="mbutton"> Book Tickets</button></Link>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Moviepage;
