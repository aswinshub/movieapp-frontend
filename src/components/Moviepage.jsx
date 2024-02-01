import React from 'react'
import Header from './Header'
import "./style.css";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Moviepage = () => {

  

  return (
    <div>

<Header/>


<div className='movie-d'>
<br /><br /><br />
<Grid container spacing={2}  sx={{  paddingleft:'10em'}}>
  <Grid item xs={6} sx={{ marginTop:'8em', paddingleft:'10em'}}><TableContainer component={Paper}>
      <Table sx={{ minWidth: 400  }} aria-label="simple table">
       
        <TableBody>
          {/* {rows.map((row) => ( */}
            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Movie Name 
              </TableCell>
              <TableCell align="right">Malaikottain Valibhan</TableCell>
              
             
            
            </TableRow>
            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Description 
              </TableCell>
              <TableCell align="right">Malaikottain valibhan is a  drama movie which says about an old story</TableCell>
              
             
            
            </TableRow>
            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Cast Details              </TableCell>
              <TableCell align="right"> mohanlal </TableCell>
              
             
            
            </TableRow>
            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Movie Reviews
              </TableCell>
              <TableCell align="right">Malaikottain Valibhan</TableCell>
              
             
            
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>

  </Grid> 
  <Grid item xs={6} sx={{ marginTop:'6em'}}>



  <h2>Malai Kottai Valibhan</h2>


<Box padding={"20px 60px"} width={'100%'} height={'500px'} borderRadius={'5px'}>

<Box className="discrip"
    sx={{
      '& > legend': { mt: 2 },
    }}
  >

<Card sx={{ maxWidth: 600}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={'https://www.hindustantimes.com/ht-img/img/2024/01/27/550x309/Malaikottai_Vaaliban_1706325575410_1706325575701.jpg'}
      
      />
      <CardContent>
   

     
      </CardContent>
    </CardActionArea>
  </Card>
<br />

    {/* <Rating name="read-only" value={value} readOnly /> */}
   
  </Box>
  <Link  to={'/login'}>  <button className="mbutton"> Book Tickets</button></Link>
</Box>


   



  </Grid>

</Grid>


</div>
{/* 

○ The customer Dashboard should display the following the list of movies in the
following format:
■ Movie Name with image
■ Category(UA,A,PG)
■ Languages(Malayalam,Hindi,Tamil,Telugu,English)


If the customer clicks on the Movie, he/she must be redirected to the movie page
where he must be able to view the following:
■ Movie Name
■ Poster
■ Description
■ Cast Details
■ Movie Reviews
■ Book Ticket Option

The Admin Dashboard should display the following the list of movies in the
following format:
■ Movie Name with image
■ Category(UA,A,PG)
■ Languages(Malayalam,Hindi,Tamil,Telugu,English)
■ Average rating of audience
■ No: of tickets sold per day



Add option must be given to a add movie with the following details.
■ Movie Name
■ Image
■ Category
■ Languages
■ Cast
■ Description
■ Ticket rates
■ No: of seats */}
      
    </div>
  )
}

export default Moviepage
