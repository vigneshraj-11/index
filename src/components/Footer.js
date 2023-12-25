import { Typography } from "@mui/material";
import React from "react";

const footer = {
  fontFamily: "cursive",
  fontSize: "12px",
  padding: "10px",
  position: "fixed",
  bottom: 0,
  width: "100%",
  textAlign: "center",
  color: "#888",
};

function Footer() {
  return (
    <div style={footer}>
      <Typography variant="p">Designed and developed by VJ Sai
      </Typography>
    </div>
  );
}

export default Footer;
