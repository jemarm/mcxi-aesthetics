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
      before: "/path-to-before-image.jpg",
      after: "/path-to-after-image.jpg",
    },
    {
      before: "/path-to-before-image.jpg",
      after: "/path-to-after-image.jpg",
    },
    // Add more before and after images as needed
  ];

  return (
    <div className="home-page">
      <Container fluid className="hero-section text-center bg-light py-5">
        <Row>
          <Col>
            <h1>Welcome to MCXI Aesthetics</h1>
            <p>Your trusted partner in cosmetic injectable services.</p>
            <Button variant="primary" href="#contact">
              Book Now
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="services-overview py-5">
        <Row>
          <Col>
            <h2>Our Services</h2>
            <p>
              Discover our range of cosmetic injectable services designed to
              enhance your natural beauty.
            </p>
            {/* Add service details here */}
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
