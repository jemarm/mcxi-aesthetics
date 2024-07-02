import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="about-page py-5">
      <h1>About Us</h1>
      <Row className="mb-4">
        <Col md={6}>
          <p>
            MCXI Aesthetics is dedicated to providing top-quality cosmetic
            injectable services. Our team of certified professionals ensures the
            highest standards of care and results that enhance your natural
            beauty.
          </p>
          <p>
            Our clinic offers a variety of services, including dermal fillers,
            Botox injections, lip enhancements, chemical peels, and
            microneedling. We use the latest techniques and products to ensure
            the best results for our clients.
          </p>
        </Col>
        <Col md={6}>
          <Image src="/images/team-placeholder.jpg" fluid />
        </Col>
      </Row>
      <h2>Our Team</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Image
            src="/images/team-member-placeholder.jpg"
            roundedCircle
            fluid
          />
          <h3>Jane Doe</h3>
          <p>Certified Nurse Injector</p>
        </Col>
        <Col md={4} className="mb-4">
          <Image
            src="/images/team-member-placeholder.jpg"
            roundedCircle
            fluid
          />
          <h3>John Smith</h3>
          <p>Medical Aesthetician</p>
        </Col>
        <Col md={4} className="mb-4">
          <Image
            src="/images/team-member-placeholder.jpg"
            roundedCircle
            fluid
          />
          <h3>Emma Johnson</h3>
          <p>Client Coordinator</p>
        </Col>
        {/* Add more team members as needed */}
      </Row>
      <h2>Our Mission</h2>
      <Row>
        <Col>
          <p>
            Our mission is to help our clients look and feel their best by
            providing safe, effective, and personalized aesthetic treatments. We
            believe in enhancing natural beauty and achieving subtle, yet
            transformative results.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
