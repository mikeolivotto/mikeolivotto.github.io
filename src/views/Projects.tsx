import React, { useMemo } from "react";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import ReactGA from "react-ga";
import { generatePageTitle } from "../shared/utils";

const Projects: React.FC = () => {
  const pageTitle = useMemo(() => generatePageTitle("Projects"), []);
  document.title = pageTitle;
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <Header name="Projects" />
      <Row xs={1} md={2} xl={3} className="g-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Row>
    </div>
  );
};

export default Projects;
