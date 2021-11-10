import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Nav activeKey="/home" className="justify-content-end flex-row">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://github.com/mikeolivotto">
            <i class="fab fa-github" aria-label="GitHub"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/in/mikeolivotto/">
            <i class="fab fa-linkedin" aria-label="LinkedIn"></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navigation;
