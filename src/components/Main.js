import { Grid, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "antd";

const contentStyle = {
  borderRadius: "5px",
  maxWidth: "320px",
  height: "360px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"  
};

function Main() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 992px)" });

  const carouselStyle = {
    margin: "50px" ? "20px" : "auto",
    right: isLargeScreen ? "-40px" : "auto",
  };

  const introDiv = {
    margin: "50px" ? "20px" : "auto",
    fontFamily: "cursive",
    fontWeight: "bold",
  };

  const introStyle = {
    padding: "10px",
    fontSize: "14px",
    textAlign: "justify",
    color: "#888",
  };

  return (
    <Grid container spacing={2}>
      <Grid item lg={4} xs={12}>
        <Carousel autoplay effect="fade" style={carouselStyle}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Grid>
      <Grid item lg={8} xs={12}>
        <div style={introDiv}>
          <Typography variant="div" color="primary">
            Introduction...
          </Typography>
          <br />
          <div style={introStyle}>
            <p className="first-line-padding">
              Greetings! I am Vignesh Raj Gunasekaran, an accomplished Software
              Engineer and Power Platform Developer with a dynamic background
              spanning over three years within the IT industry. My expertise
              primarily revolves around Java and React, positioning me as a
              versatile Full Stack Developer well-versed in crafting
              user-friendly, robust software solutions.
              <br /> <br /> Throughout my career, I've actively engaged in the
              entire software development lifecycle, adeptly navigating Agile
              methodologies to deliver high-quality applications. My proficiency
              extends across an impressive array of technologies including
              React.js, Java, MySQL, MongoDB, Spring Boot, HTML, CSS,
              JavaScript, Bootstrap, Material-UI, and Ant Design. My journey in
              AI and Power Platform is a testament to my commitment to
              continuous learning and innovation. As I delve deeper into these
              domains, I aim to amalgamate my existing skill set with
              cutting-edge technologies to craft intelligent, efficient, and
              impactful solutions. Driven by a passion for delivering
              excellence, I thrive in collaborative environments where
              creativity and problem-solving converge.
              <br /> <br /> My dedication to staying abreast of industry trends
              and my hands-on experience allows me to seamlessly adapt to
              diverse projects and contribute effectively to their success. I am
              excited about the opportunity to leverage my diverse skill set,
              technical acumen, and passion for innovation to drive tangible
              value in the ever-evolving landscape of technology.
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Main;
