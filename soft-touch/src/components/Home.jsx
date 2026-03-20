import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center text-center"
      style={{ background: "url('/video1.mp4') center/cover no-repeat" }}
    >
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="display-3 fw-bold"
        >
          Soft Touch Studio & Spa
        </motion.h1>
        <p className="lead">
          Luxury grooming, relaxation & lifestyle experience
        </p>
        <Button size="lg">Book Appointment</Button>
      </Container>
    </section>
  );
}
