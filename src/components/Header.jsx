import { AppBar, Autocomplete, Box, Dialog, Tab,TextField, Toolbar } from '@mui/material'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';


import { Link } from 'react-router-dom';
import Login from '../ui-components/Login';
import React from 'react';



const dummyArray=['Aadujeevitham', 'Malaikotte Valibhan', ' Captain Miller']

const Header = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <div>
    <AppBar sx={{bgcolor:'#2d2b42'}}>
<Toolbar>

    <Box width={"20%"}>
    <MovieFilterIcon/> 

    </Box>

    <Box width={"30%"} margin={"auto"}>
    <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={dummyArray.map((option) => option)}
        renderInput={(params) => <TextField sx={{input:{color:'silver'}}} variant='standard' {...params} placeholder="Search Movies" />}
      />

    </Box>
<Box display={'flex'}>


<Link   style={{textDecoration:'none',color:'white'}} to={'/'}><Tab label="Movies"/></Link>
<Link style={{textDecoration:'none',color:'white'}} to={'/signup'}><Tab label="Signup"/></Link> 



<Link   onClick={handleClickOpen} style={{textDecoration:'none',color:'white'}} to={'/login'}><Tab label="Login"/></Link>
     
       


    













</Box>

</Toolbar>


    </AppBar>

    </div>
  )
}

export default Header