import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Headeradm from "./Headeradm";
import addimage from "./add.jpg";
import { Link } from "react-router-dom";
const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4004/movie/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // DELETE-------------------------
  function deleteMovie(id) {
    axios.delete("http://localhost:4004/movie/delete/" + id).then((res) => {
      alert(res.data);
      window.location.reload(false);
    });
  }

  return (
    <div>
      <Headeradm />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h2>Admin Dashboard</h2>

      <Divider />

      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", marginBottom: "20px", paddingLeft: "6em" }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Box padding={"100px 100px"} borderRadius={"5px"}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <Link style={{ textDecoration: "none" }} to={"/movieupdate"}>
                    <CardMedia component="img" height="200" image={addimage} />
                  </Link>
                  <CardContent>
                    <Typography
                      sx={{ justifyContent: "center", display: "flex" }}
                      component="div"
                    >
                      ADD NEW
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <br />

              {/* <Rating name="read-only" value={value} readOnly /> */}
            </Box>
          </Box>
        </Grid>
        {data.map((val, i) => (
          <Grid item xs={12} md={6} lg={4}>
            <Box
              padding={"20px 60px"}
              width={"400px"}
              height={"500px"}
              borderRadius={"5px"}
            >
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={val.imgurl}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {val.moviename} <br />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Category :{val.catogary}
                        <br />
                        Language : {val.language} <br />
                        Rate of Ticket : {val.rate} <br />
                        No of Tickets : {val.nooftickets} <br />
                      </Typography>
                      <button className="editbtn">
                        {" "}
                        <Link  style={{color:'white'}} to={`/movieupdate/${val._id}`}>
                          <EditIcon />
                        </Link>
                      </button>{" "}
                  
                      <button 
                        onClick={() => {
                          deleteMovie(val._id);
                        }}
                        className="deletebtn"
                      >
                        <DeleteIcon />
                      </button>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <br />

                {/* <Rating name="read-only" value={value} readOnly /> */}
              </Box>
            </Box>
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Admin;
