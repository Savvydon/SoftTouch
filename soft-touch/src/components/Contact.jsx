// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";

// export default function Contact() {
//   return (
//     <section id="contact" className="py-5">
//       <Container>
//         <h2 className="text-center mb-4">Contact Us</h2>
//         <Row>
//           <Col md={6}>
//             <h5>Get in Touch</h5>
//             <p>
//               <Phone size={16} /> +2347041515235
//             </p>
//             <p>
//               <MessageCircle size={16} />{" "}
//               <a
//                 href="https://wa.me/2347041515235"
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 WhatsApp Chat
//               </a>
//             </p>
//             <p>
//               <Mail size={16} /> softtouchstudio17@gmail.com
//             </p>
//             <p>
//               Shop A21 Gidanbu Plaza, Lagos Garage, Kawo Bustop, Kaduna State
//             </p>

//             <div className="d-flex gap-3 mt-3">
//               <a href="https://instagram.com/royalfit">
//                 <Instagram />
//               </a>
//               <a href="https://tiktok.com/@soft.touch.studio6?">
//                 <MessageCircle />
//               </a>
//             </div>
//           </Col>

//           <Col md={6}>
//             <h5>Send a Message</h5>
//             <Form>
//               <Form.Group className="mb-2">
//                 <Form.Control placeholder="Your Name" />
//               </Form.Group>
//               <Form.Group className="mb-2">
//                 <Form.Control placeholder="Email" />
//               </Form.Group>
//               <Form.Group className="mb-2">
//                 <Form.Control as="textarea" rows={3} placeholder="Message" />
//               </Form.Group>
//               <Button>Send Message</Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = " +2347041515235";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const phoneNumbers = [" +2347041515235", "+2349063784956"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-5">
      <Container className="my-5">
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <p>
              <FaEnvelope size={16} /> softtouchstudio17@gmail.com
            </p>
            <p>
              Shop A21 Gidanbu Plaza, Lagos Garage, Kawo Bustop, Kaduna State
            </p>
            <Button
              variant="success"
              className="m-2"
              href={whatsappLink}
              target="_blank"
            >
              <FaWhatsapp className="me-2" /> WhatsApp
            </Button>
            <Button
              variant="dark"
              className="m-2"
              href="https://www.tiktok.com/@soft.touch.studio6?_r=1&_t=ZS-94ozr6jYM8C"
              target="_blank"
            >
              <FaTiktok className="me-2" /> TikTok
            </Button>
            <Button variant="primary" className="m-2" href="" target="_blank">
              <FaInstagram className="me-2" /> Instagram
            </Button>
            {phoneNumbers.map((num, idx) => (
              <Button
                key={idx}
                variant="info"
                className="m-2"
                href={`tel:${num}`}
              >
                <FaPhone className="me-2" /> {num}
              </Button>
            ))}
          </Col>
          <Col md={6}>
            <h5>Send a Message</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="form-control mb-2"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                className="form-control mb-2"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                className="form-control mb-2"
                rows={4}
                placeholder="Your Message"
              />
              <Button type="submit" variant="primary" className="w-100">
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
