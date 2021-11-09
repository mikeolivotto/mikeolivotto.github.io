import React from "react";
import CycleText from "../components/CycleText";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const Home = () => {
  document.title = `Mike Olivotto | Web Developer`;

  return (
    <div className="d-flex align-items-center w-100" style={{"height": "100%"}}>
      <div className="d-flex justify-content-center">
        <div className="col-md-10">
          {/* <Header name="" /> */}
            <p style={{"marginBottom": "-5px"}}>Hi, I'm</p>
            <h1 className="display-1" style={{"display": "inline"}}>Mike Olivotto</h1> <span className="h1">👋</span>
            <h2>
              <CycleText />
            </h2>
            <p style={{"marginTop": "16px"}}>
              Experienced in web app development, website management and digital marketing. A curious problem solver who builds useful (and sometimes just meme-worthy) tools.
            </p>
            <p>
              Core tech capabilities include <strong>
                React, Node.js, Ruby/Rails, PostgreSQL, JavaScript,
                HTML5, CSS3, Python
              </strong>.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
