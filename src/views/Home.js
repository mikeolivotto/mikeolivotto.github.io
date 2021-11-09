import React from "react";
import CycleText from "../components/CycleText";

const Home = () => {
  document.title = `Mike Olivotto | Web Developer`;

  return (
    <div className="d-flex align-items-center" style={{"height": "100%"}}>
      <div className="d-flex justify-content-center w-100">
        <div className="col-11 col-md-10">
            <p style={{"marginBottom": "-5px"}}>Hi, I'm</p>
            <h1 className="display-1" style={{"display": "inline"}}>Mike Olivotto</h1> <span className="h1">👋</span>
            <h2>
              <CycleText />
            </h2>

        </div>
      </div>
    </div>
  );
};

export default Home;
