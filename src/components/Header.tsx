import React, { CSSProperties } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface HeaderProps {
  name: string;
}

export const Header: React.FC<HeaderProps> = ({ name }) => {
  const style: CSSProperties = {
    height: "200px",
  };

  return (
    <Row className="mb-3">
      <Col className="d-flex justify-content-center align-items-center" style={style}>
        <h1>{name}</h1>
      </Col>
    </Row>
  );
};

export default Header;
