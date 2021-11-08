import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Header = (props) => {
  const { name } = props;
  const style = {
    "color": "blue",
    "height": "60vh",
    // "backgroundColor": "#cce3ff",
    "border": "1px solid black"
  }

  return (
    <Row className="mb-3">
      <Col className="d-flex justify-content-center align-items-center" style={style}>
        <h1>{name}</h1>
      </Col>
    </Row>
  );
};

export default Header;
