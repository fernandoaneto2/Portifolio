import React from "react";

// Frontend
import reactsvg from "../../assets/react.svg";
import styledcomponentspng from "../../assets/styledcomponents.png";
import  JavaScript from "../../assets/javascript_image.png";
import  html from "../../assets/html_image.png";
import  css from "../../assets/css_image.png";
// import coreuisvg from "../../assets/coreui.svg";
// import gluestackuisvg from "../../assets/gluestackui.png";
// import linariasvg from "../../assets/linaria.svg";

// Backend
import nodesvg from "../../assets/nodejs.svg";
import mongodb from "../../assets/mongo_image.png"
import vite from "../../assets/vite_image.png"

// import typescriptsvg from "../../assets/typescript.svg";
// import awslambdasvg from "../../assets/awslambda.svg";
// import serverlesssvg from "../../assets/serverless.svg";
// import typeormsvg from "../../assets/typeorm.png";

// // Clouds
// import awssvg from "../../assets/aws.svg";
// import gcpsvg from "../../assets/gcp.svg";

// Tools
// import dbeaverpng from "../../assets/dbeaver.png";
// import postmansvg from "../../assets/postman.svg";
// import insomniasvg from "../../assets/insomnia.svg";
import git from "../../assets/git.svg";

import "./styles.css";

export function TechsCards() {
  return (
    <>
      <h1>Minhas Tecnologias</h1>
      <div className="tech-cards">
        

        <div className="tech-card frontend">
          <img
            className="tech-logo"
            style={{ width: "100px", height: "55px" }}
            src={html}
            alt="Styled-Components logo"
          />
        </div>

        <div className="tech-card frontend">
          <img
            className="tech-logo"
            style={{ width: "100px", height: "55px" }}
            src={css}
            alt="Styled-Components logo"
          />
        </div>

        <div className="tech-card frontend">
          <img
            className="tech-logo"
            style={{ width: "55px", height: "55px" }}
            src={JavaScript}
            alt="Styled-Components logo"
          />
        </div>

        <div className="tech-card frontend">
          <img className="tech-logo" src={reactsvg} alt="React logo" />
        </div>
        
        <div className="tech-card">
          <img className="tech-logo" src={nodesvg} alt="NodeJS logo" />
        </div>

        <div className="tech-card">
          <img className="tech-logo" src={vite} alt="NodeJS logo" />
        </div>

        <div className="tech-card">
          <img className="tech-logo" src={mongodb} alt="NodeJS logo" />
        </div>
        
        <div className="tech-card">
          <img className="tech-logo" src={git} alt="Git logo" />
        </div>
      </div>
    </>
  );
}
