import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ServicesPage = () => {
  const services = [
    {
      title: "Dermal Fillers",
      description:
        "Enhance your facial features and restore volume with our range of dermal fillers.",
      image: "/path-to-image.jpg",
    },
    {
      title: "Botox Injections",
      description:
        "Reduce wrinkles and fine lines with our professional Botox injection services.",
      image: "/path-to-image.jpg",
    },
    {
      title: "Lip Enhancement",
      description:
        "Achieve fuller, more defined lips with our lip enhancement treatments.",
      image: "/path-to-image.jpg",
    },
    // Add more services as needed
  ];

  return (
    <Container className="services-page py-5">
      <h1>Our Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
