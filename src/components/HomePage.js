import React from "react";
import { Container, Row, Col, Button, Carousel, Card } from "react-bootstrap";

const HomePage = () => {
  const testimonials = [
    {
      quote: "Fantastic service and amazing results!",
      author: "Sarah J.",
    },
    {
      quote: "I love my new look, thank you MCXI Aesthetics!",
      author: "Emily K.",
    },
    // Add more testimonials as needed
  ];

  const beforeAfterImages = [
    {
      before: "/images/before-image.jpg",
      after: "/images/after-image.jpg",
    },
    {
      before: "/images/before-image.jpg",
      after: "/images/after-image.jpg",
    },
    // Add more before and after images as needed
  ];

  return (
    <div className="home-page">
      <Container fluid className="hero-section" id="home">
        <div className="hero-content">
          <Row>
            <Col>
              <h1>Welcome to MCXI Aesthetics</h1>
              <p>Your trusted partner in cosmetic injectable services.</p>
              <Button variant="primary" href="#contact">
                Book Now
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="about-overview py-5" id="about">
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>Learn more about MCXI Aesthetics, our team, and our mission.</p>
            <Row className="mb-4">
              <Col md={6}>
                <p>
                  MCXI Aesthetics is dedicated to providing top-quality cosmetic
                  injectable services. Our team of certified professionals
                  ensures the highest standards of care and results that enhance
                  your natural beauty.
                </p>
                <p>
                  Our clinic offers a variety of services, including dermal
                  fillers, Botox injections, lip enhancements, chemical peels,
                  and microneedling. We use the latest techniques and products
                  to ensure the best results for our clients.
                </p>
              </Col>
              <Col md={6}>
                <img
                  src="/images/team-placeholder.jpg"
                  alt="Our Team"
                  className="img-fluid"
                />
              </Col>
            </Row>
            <h3>Our Team</h3>
            <Row>
              <Col md={4} className="mb-4">
                <img
                  src="/images/team-member-placeholder.jpg"
                  alt="Jane Doe"
                  className="img-fluid rounded-circle"
                />
                <h4>Jane Doe</h4>
                <p>Certified Nurse Injector</p>
              </Col>
              <Col md={4} className="mb-4">
                <img
                  src="/images/team-member-placeholder.jpg"
                  alt="John Smith"
                  className="img-fluid rounded-circle"
                />
                <h4>John Smith</h4>
                <p>Medical Aesthetician</p>
              </Col>
              <Col md={4} className="mb-4">
                <img
                  src="/images/team-member-placeholder.jpg"
                  alt="Emma Johnson"
                  className="img-fluid rounded-circle"
                />
                <h4>Emma Johnson</h4>
                <p>Client Coordinator</p>
              </Col>
            </Row>
            <h3>Our Mission</h3>
            <Row>
              <Col>
                <p>
                  Our mission is to help our clients look and feel their best by
                  providing safe, effective, and personalized aesthetic
                  treatments. We believe in enhancing natural beauty and
                  achieving subtle, yet transformative results.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="services-overview py-5" id="services">
        <Row>
          <Col>
            <h2>Our Services</h2>
            <p>
              Discover our range of cosmetic injectable services designed to
              enhance your natural beauty.
            </p>
            <Row>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="/images/service-placeholder.jpg"
                    alt="Service 1"
                  />
                  <Card.Body>
                    <Card.Title>Service 1</Card.Title>
                    <Card.Text>Description of Service 1.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="/images/service-placeholder.jpg"
                    alt="Service 2"
                  />
                  <Card.Body>
                    <Card.Title>Service 2</Card.Title>
                    <Card.Text>Description of Service 2.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="/images/service-placeholder.jpg"
                    alt="Service 3"
                  />
                  <Card.Body>
                    <Card.Title>Service 3</Card.Title>
                    <Card.Text>Description of Service 3.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="testimonials py-5">
        <h2>Testimonials</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>"{testimonial.quote}"</Card.Text>
                  <Card.Footer>- {testimonial.author}</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="before-after py-5">
        <h2>Before & After</h2>
        <Carousel>
          {beforeAfterImages.map((image, index) => (
            <Carousel.Item key={index}>
              <Row>
                <Col md={6}>
                  <img
                    src={image.before}
                    alt="Before"
                    className="d-block w-100"
                  />
                </Col>
                <Col md={6}>
                  <img
                    src={image.after}
                    alt="After"
                    className="d-block w-100"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default HomePage;
