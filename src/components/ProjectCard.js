import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function ProjectCard(props) {
    const {title, url, description, tech, features, img} = props
  return (
    <div>
      <Col>
        <Card>
        <Card.Link href={url}><Card.Img variant="top" src={img} /></Card.Link>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Link href={url}>{url}</Card.Link>
            <Card.Text>{description}</Card.Text>
            <ul>
              <li>
                <strong>Tech:</strong> {tech}
              </li>
              {features && <li><strong>Features:</strong> {features}</li>}
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
