import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import React, { useState } from 'react'


const dummyArray=['Aadujeevitham', 'Malaikotte Valibhan', ' K G F 3']

const Header = () => {

  const [value,setValue]= useState(0)

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
<Tabs textColor='white' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)} >


<Tab label="Movies"/>
<Tab label="Login"/>
<Tab label="Signup"/>
</Tabs>

</Box>

</Toolbar>


    </AppBar>
  )
}

export default Header