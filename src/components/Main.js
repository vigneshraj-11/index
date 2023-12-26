import { Grid, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import image from "../assets/img/img-5.jpg";
import "react-medium-image-zoom/dist/styles.css";
import Typewriter from "typewriter-effect";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { Timeline } from "antd";
import { Image } from "antd";
import htmlIcon from "../assets/icon/html.png";
import springIcon from "../assets/icon/spring.png";
import reactIcon from "../assets/icon/react.png";
import cssIcon from "../assets/icon/css.png";
import msIcon from "../assets/icon/ms.png";
import javaIcon from "../assets/icon/java.png";
import resumePdf from "../assets/pdf/resume.pdf";

function Main() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 992px)" });

  const contentStyle = {
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    background: "#364d79",
    display: "flex",
    justifyContent: isLargeScreen ? "center" : "flex-end",
  };

  const imageDiv = {
    margin: "40px",
  };

  const introDiv = {
    margin: "50px" ? "40px" : "auto",
    fontFamily: "cursive",
    fontWeight: "bold",
  };

  const headerStyle = {
    fontFamily: "cursive",
    fontWeight: "bold",
  };

  const skillStyle = {
    textAlign: "center",
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
    <>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={12}>
          <div style={imageDiv}>
            <Image.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              <Image src={image} alt="personalImage" style={contentStyle} />
            </Image.PreviewGroup>
          </div>
        </Grid>
        <Grid item lg={8} xs={12}>
          <div style={introDiv}>
            <Typography variant="div" color="primary">
              <Typewriter
                options={{
                  strings: [
                    "Hi Welcome you...",
                    "Greetings! I am Vignesh Raj Gunasekaran...",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <div style={introStyle}>
              <p className="first-line-padding">
                An accomplished Software Engineer and Power Platform Developer
                with a dynamic background spanning over three years within the
                IT industry. My expertise primarily revolves around Java and
                React, positioning me as a versatile Full Stack Developer
                well-versed in crafting user-friendly, robust software
                solutions.
                <br /> <br /> Throughout my career, I've actively engaged in the
                entire software development lifecycle, adeptly navigating Agile
                methodologies to deliver high-quality applications.
                <br /> <br /> My proficiency extends across an impressive array
                of technologies including React.js, Java, MySQL, MongoDB, Spring
                Boot, HTML, CSS, JavaScript, Bootstrap, Material-UI.
                <br /> <br /> My journey in AI and Power Platform is a testament
                to my commitment to continuous learning and innovation. As I
                delve deeper into these domains, I aim to amalgamate my existing
                skill set with cutting-edge technologies to craft intelligent,
                efficient, and impactful solutions.
                <br /> <br /> Driven by a passion for delivering excellence, I
                thrive in collaborative environments where creativity and
                problem-solving converge.
                <br /> <br /> My dedication to staying abreast of industry
                trends and my hands-on experience allows me to seamlessly adapt
                to diverse projects and contribute effectively to their success.
                <br /> <br />I am excited about the opportunity to leverage my
                diverse skill set, technical acumen, and passion for innovation
                to drive tangible value in the ever-evolving landscape of
                technology.
              </p>
            </div>
          </div>
          <div style={{ display: "none" }}>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </Grid>
      </Grid>
      <div id="about" style={{ margin: "50px" }}>
        <Grid container spacing={3}>
          <Grid item lg={12} xs={12}>
            <Typography variant="h6" color="primary" style={skillStyle}>
              About Me
            </Typography>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Grid item lg={12} xs={12} style={headerStyle}>
              <Typography variant="h6" color="primary" style={headerStyle}>
                Education
              </Typography>
            </Grid>
            <br />
            <Grid item lg={12} xs={12}>
              <Timeline
                style={{ fontFamily: "cursive" }}
                items={[
                  {
                    children:
                      "Bachelor of Engineering in Computer Science and Engineering, completed in the year 2020.",
                  },
                  {
                    children:
                      "Higher Secondary Certificate, completed in the year 2016.",
                  },
                  {
                    children:
                      "Secondary School Leaving Certificate, completed in the year 2014.",
                  },
                ]}
              />
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Grid item lg={12} xs={12} style={headerStyle}>
              <Typography variant="h6" color="primary" style={headerStyle}>
                Experience
              </Typography>
            </Grid>
            <br />
            <Grid item lg={12} xs={12}>
              <Timeline
                style={{ fontFamily: "cursive" }}
                items={[
                  {
                    children:
                      "Software Engineer at CTD Techs Pvt Ltd (Current).",
                  },
                  {
                    children:
                      "Junior developer at Transforma Pvt Ltd (2021 - 2023).",
                  },
                  {
                    children: "Intern at Transforma Pvt Ltd (2020 - 2021).",
                  },
                ]}
              />
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Grid item lg={12} xs={12} style={headerStyle}>
              <Typography variant="h6" color="primary" style={headerStyle}>
                Projects
              </Typography>
            </Grid>
            <br />
            <Grid item lg={12} xs={12}>
              <Timeline
                style={{ fontFamily: "cursive" }}
                items={[
                  {
                    children:
                      "Created Virtual Interview and Timeslog systems with React js, managing UI, state, and APIs.",
                  },
                  {
                    children:
                      "Upgraded HRMS to Spring Boot REST API with React.js for enhanced front-end and scalability.",
                  },
                  {
                    children:
                      "Designed Ticketing using Spring Boot, Thymeleaf, Bootstrap, and jQuery for ticket management.",
                  },
                  {
                    children:
                      "Restructured Transforma Workflow entirely with React.js for a more efficient workflow design.",
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={12} xs={12}>
            <Typography variant="h6" color="primary" style={skillStyle}>
              Skill Sets
            </Typography>
          </Grid>
          <br />
          <br />
          <Grid item lg={2} xs={6} style={{ textAlign: "center" }}>
            <Image width={80} src={javaIcon} />
          </Grid>
          <Grid item lg={2} xs={6} style={{ textAlign: "center" }}>
            <Image width={80} src={reactIcon} />
          </Grid>
          <Grid item lg={2} xs={6} style={{ textAlign: "center" }}>
            <Image width={80} src={springIcon} />
          </Grid>
          <Grid item lg={2} xs={6} style={{ textAlign: "center" }}>
            <Image width={80} src={msIcon} />
          </Grid>
          <Grid item lg={2} xs={6} style={{ textAlign: "center" }}>
            <Image width={80} src={htmlIcon} />
          </Grid>
          <Grid item lg={2} xs={6} style={{ textAlign: "center" }}>
            <Image width={80} src={cssIcon} />
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <div
          id="contact"
          style={{ height: "300px", display: "grid", alignItems: "center" }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              lg={6}
              xs={12}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Typography variant="h6" color="primary" style={skillStyle}>
                Contact Me
              </Typography>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Typography variant="h6" style={skillStyle}>
                <a
                  href="mailto:vigneshraj.jul11@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Via Mail
                </a>
              </Typography>
              <br />
              <br />
              <Typography variant="h6" style={skillStyle}>
                <a
                  href="https://web.whatsapp.com/send?phone=8637626129&text=Hi%20Vignesh"
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Via Whatsapp
                </a>
              </Typography>
              <br />
              <br />
              <Typography variant="h6" style={skillStyle}>
                <a
                  href={resumePdf}
                  style={{ textDecoration: "none", color: "inherit" }}
                  download="Vignesh_CV"
                >
                  Get a CV
                </a>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Main;
