import React, { CSSProperties } from "react";
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
  const imageStyle: CSSProperties = {
    maxHeight: "250px",
    // width: "auto",
    height: "auto",
    objectFit: "contain",
    margin: "0 auto",
    display: "block",
  };

  return (
    <div>
      <Col>
        <Card>
          <Card.Link
            href={demoUrl || githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card.Img variant="top" src={img} style={imageStyle} />
          </Card.Link>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {demoUrl && (
              <Card.Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Card.Link>
            )}
            {githubUrl && (
              <Card.Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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
