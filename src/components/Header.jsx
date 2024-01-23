import { AppBar, Autocomplete, Box, Tab,TextField, Toolbar } from '@mui/material'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

import { Link } from 'react-router-dom';


const dummyArray=['Aadujeevitham', 'Malaikotte Valibhan', ' K G F 3']

const Header = () => {



  return (
  
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


<Link style={{textDecoration:'none',color:'white'}} to={'/movie'}><Tab label="Movies"/></Link>
<Link style={{textDecoration:'none',color:'white'}} to={'/login'}><Tab label="Login"/></Link>
<Link style={{textDecoration:'none',color:'white'}} to={'/signup'}><Tab label="Signup"/></Link>



</Box>

</Toolbar>


    </AppBar>
  )
}

export default Header