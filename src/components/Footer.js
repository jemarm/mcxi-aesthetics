import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">MCXI Aesthetics</h5>
            <p>Providing quality cosmetic injectable services.</p>
          </Col>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <p>Email: info@mcxiaesthetics.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-dark text-white">
        © 2023 MCXI Aesthetics
      </div>
    </footer>
  );
};

export default Footer;
