import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Hairstyling from "../assets/Hairstyling.jpg";
import Hairstyling2 from "../assets/Hairstyling2.jpg";
import Facials from "../assets/Facials.jpg";
import Pedicure from "../assets/Pedicure.jpg";
import Teeth from "../assets/Teeth.jpg";
import Snooker from "../assets/Snooker.jpg";
import Snooker1 from "../assets/Snooker1.jpg";

const services = [
  {
    name: "Hair Styling",
    text: "Transform your look with our expert hair styling services! From trendy cuts to flawless finishes, our stylists craft the perfect look for you. Book now for a fresh new vibe! 😊",
    imgs: [Hairstyling, Hairstyling2, Hairstyling],
  },
  {
    name: "Spa & Facials",
    text: "Pamper your hands and feet with our luxurious manicure and pedicure treatments. Relax and rejuvenate with our expert technicians. You deserve it! 💅",
    imgs: [Facials, Facials, Facials],
  },
  {
    name: "Tattoo & Piercing",
    text: "Indulge in ultimate relaxation with our spa and facial treatments. Rejuvenate your skin and unwind with our expert therapists. Bliss awaits!",
    imgs: [Pedicure, Pedicure, Pedicure],
  },
  {
    name: "Manicure & Pedicure",
    text: "Make a statement with our safe and stylish tattoo and piercing services. Our expert artists bring your vision to life. Get inked! 🖋️",
    imgs: [Pedicure, Pedicure, Pedicure],
  },
  {
    name: "Teeth Cleaning",
    text: "Challenge friends and unwind with our top-notch snooker tables. Perfect for social gatherings or solo relaxation. Rack up the fun! 🎱",
    imgs: [Teeth, Teeth, Teeth],
  },
  {
    name: "Snooker",
    text: "Brighten your smile with our professional teeth cleaning services. Our expert hygienists ensure a healthy, radiant smile. Book your appointment now!",
    imgs: [Snooker, Snooker1, Snooker],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {services.map((service, i) => (
            <Col md={6} key={i} className="mb-4">
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Row>
                      {service.imgs.map((img, idx) => (
                        <Col xs={4} key={idx}>
                          <img src={img} className="img-fluid rounded" />
                        </Col>
                      ))}
                    </Row>
                    {service.text}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
