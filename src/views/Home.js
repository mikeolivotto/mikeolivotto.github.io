import React from "react";
import Header from "../components/Header";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const Home = () => {
  document.title = `Mike Olivotto | Web Developer`;
  return (
    <div>
      <Header name="Mike Olivotto" />

      <h2>Hi, I'm Mike 👋</h2>
      <p>
        I am a digital professional skilled in full-stack web development and
        experienced in digital marketing & website management. Comfortable
        translating between technical and business requirements in product
        development, I'm a curious problem solver driven that loves to build
        useful tools.
      </p>
      <p>
        Core tech capabilities include MERN, Ruby/Rails, PostgreSQL, JavaScript,
        HTML5, CSS3, Python.
      </p>
    </div>
  );
};

export default Home;
