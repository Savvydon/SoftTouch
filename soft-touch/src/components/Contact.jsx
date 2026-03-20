import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
          <Col md={6}>
            <h5>Get in Touch</h5>
            <p>
              <Phone size={16} /> +2347041515235
            </p>
            <p>
              <MessageCircle size={16} />{" "}
              <a
                href="https://wa.me/2347041515235"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                WhatsApp Chat
              </a>
            </p>
            <p>
              <Mail size={16} /> softtouchstudio17@gmail.com
            </p>
            <p>
              Shop A21 Gidanbu Plaza, Lagos Garage, Kawo Bustop, Kaduna State
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="">
                <Instagram />
              </a>
              <a href="https://tiktok.com/@soft.touch.studio6?">
                <MessageCircle />
              </a>
            </div>
          </Col>

          <Col md={6}>
            <h5>Send a Message</h5>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <Button>Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
