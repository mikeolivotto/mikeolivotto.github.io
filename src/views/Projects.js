import React from "react";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import ProjectCard from "../components/ProjectCard"
import projects from '../data/projects'
import ReactGA from 'react-ga';

const Projects = () => {
  document.title = `Projects | Mike Olivotto`;
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div>
      <Header name="Projects" />
      <Row xs={1} md={2} xl={3} className="g-4">
        {projects.map((project, index) => <ProjectCard
            key={index} 
            title={project.title} 
            url={project.url} 
            description={project.description} 
            tech={project.tech} 
            features={project.features} 
            img={project.img} 
            />)}
    </Row>
    </div>
  );
};

export default Projects;
