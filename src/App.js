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
import Experience from "./views/Experience";
import Contact from "./views/Contact";

const App = () => {
  const style = {
    "fontFamily": "Open Sans', sans-serif",
    "fontWeight": "400"
  }
  return (
    <Router>
      <Container style={style}>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
