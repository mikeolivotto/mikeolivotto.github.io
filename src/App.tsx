import React, { CSSProperties } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Nav";
import Home from "./views/Home";
import Projects from "./views/Projects";
import About from "./views/About";
import NotFound from "./views/NotFound";
import ReactGA from 'react-ga';

const App: React.FC = () => {
  ReactGA.initialize('UA-39024220-4');

  const style: CSSProperties = {
    fontFamily: "Open Sans', sans-serif",
    fontWeight: 400,
    height: "calc(var(--vh, 1vh) * 100)"
  };

  return (
    <Router>
      <Container className="d-flex flex-column" style={style}>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
