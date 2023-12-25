import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={headerFont}
          >
            Vignesh Gunasekaran
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
