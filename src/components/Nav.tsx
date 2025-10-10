import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
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
          <Nav.Link
            href="https://github.com/mikeolivotto"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true" />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            href="https://www.linkedin.com/in/mikeolivotto/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navigation;
