import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Hi, Hi, I'm <strong>John Deo.</strong></h1>
            <p className="text-muted">
              A freelance Web developer from London. I convert custom web designs to bootstrap templates.
              <br />
              I make YouTube videos and write Blog.
            </p>
            <Button variant="primary">I'M AVAILABLE</Button>
            <div className="mt-3">
              <a href="#"><i className="fab fa-facebook-f me-3"></i></a>
              <a href="#"><i className="fab fa-twitter me-3"></i></a>
              <a href="#"><i className="fab fa-instagram me-3"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" 
              alt="John Deo"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
