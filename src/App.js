import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Nav";
import Home from "./views/Home";
import Projects from "./views/Projects";
import About from "./views/About";
import ReactGA from 'react-ga';

const App = () => {
  ReactGA.initialize('UA-39024220-4');



  const style = {
    "fontFamily": "Open Sans', sans-serif",
    "fontWeight": "400",
    "height": "100vh"
  }
  return (
    <Router>
      <Container className="d-flex flex-column" style={style}>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
