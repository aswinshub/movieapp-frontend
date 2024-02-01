import React from 'react'
import { AppBar,Box, Tab, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import PersonIcon from '@mui/icons-material/Person';
import "./style.css";

const Headeruser = () => {
  return (
    <div>
         <AppBar sx={{bgcolor:'#2d2b42'}}>
<Toolbar>

    <Box width={"20%"}>
    <MovieFilterIcon/> 

    </Box>

    <Box width={"30%"} margin={"auto"}>
 

    </Box>
<Box display={'flex'}>


<Link style={{textDecoration:'none',color:'white'}} to={''}><Tab label="Booking History"/></Link>
<Link style={{textDecoration:'none',color:'white'}} to={'/'}><Tab label="Logout"/></Link>
<PersonIcon className='usericon'/>







</Box>
</Toolbar >

</AppBar >

      
    </div>
  )
}

export default Headeruser
