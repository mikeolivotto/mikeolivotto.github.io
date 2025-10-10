import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Project } from "../data/projects";

const ProjectCard: React.FC<Project> = ({
  title,
  demoUrl,
  githubUrl,
  description,
  tech,
  features,
  img,
}) => {
  return (
    <div>
      <Col>
        <Card>
          <Card.Link href={demoUrl || githubUrl || "#"}>
            <Card.Img variant="top" src={img} />
          </Card.Link>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {demoUrl && <Card.Link href={demoUrl}>Demo</Card.Link>}
            {githubUrl && (
              <Card.Link href={githubUrl}>
                <i className="fab fa-github" aria-label="GitHub" />
              </Card.Link>
            )}
            <Card.Text>{description}</Card.Text>
            <ul>
              <li>
                <strong>Tech:</strong> {tech}
              </li>
              {features && (
                <li>
                  <strong>Features:</strong> {features}
                </li>
              )}
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ProjectCard;
