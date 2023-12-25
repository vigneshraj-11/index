import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/img/logo.png";
import { Button } from "@mui/material";

const appbarStyle = {
  backgroundColor: "transparent",
  color: "black",
  backdropFilter: "blur(10px)",
  boxShadow: "none",
};

const headerFont = {
  fontFamily: "cursive",
  fontWeight: "bold",
};

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appbarStyle}>
        <Toolbar variant="dense">
          <img
            src={logo}
            alt="ppp"
            style={{ width: "40px", height: "40px" }}
          ></img>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={headerFont}
            sx={{ flexGrow: 1}}
          >
            Vignesh Gunasekaran
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }} >
            <Button sx={{ color: "black"}} style={headerFont}>About</Button>
            <Button sx={{ color: "black"}} style={headerFont}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
