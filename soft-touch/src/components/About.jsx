import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-4"
        >
          About Us
        </motion.h2>
        <p>
          Soft Touch is a premium lifestyle brand that blends modern grooming,
          luxury spa treatments, and recreational experiences into one unique
          destination. Located at Lagos Garage, Kawo Bustop, Mando, Kaduna
          State, we are committed to delivering top-tier services tailored to
          both men and women.
        </p>
        <p>
          From precision haircuts and advanced skincare treatments to relaxing
          spa sessions and engaging pool (snooker) experiences, Soft Touch is
          designed to elevate your confidence and comfort. We also offer
          professional tattoo and piercing services, nail care, and a curated
          collection of high-quality hair products and accessories.
        </p>
        <p>
          Our mission is simple: to provide an environment where style,
          relaxation, and lifestyle meet. Whether you're here for grooming,
          self-care, or leisure, Soft Touch guarantees a premium experience.
        </p>
      </Container>
    </section>
  );
}
