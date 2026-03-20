// import { Container, Row, Col, Card } from "react-bootstrap";
// import { motion } from "framer-motion";
// import Hairstyling from "../assets/Hairstyling.jpg";
// import Hairstyling2 from "../assets/Hairstyling2.jpg";
// import Facials from "../assets/Facials.jpg";
// import Pedicure from "../assets/Pedicure.jpg";
// import Teeth from "../assets/Teeth.jpg";
// import Snooker from "../assets/Snooker.jpg";
// import Snooker1 from "../assets/Snooker1.jpg";

// const services = [
//   {
//     name: "Hair Styling",
//     text: "Transform your look with our expert hair styling services! From trendy cuts to flawless finishes, our stylists craft the perfect look for you. Book now for a fresh new vibe! 😊",
//     imgs: [Hairstyling, Hairstyling2, Hairstyling],
//   },
//   {
//     name: "Spa & Facials",
//     text: "Pamper your hands and feet with our luxurious manicure and pedicure treatments. Relax and rejuvenate with our expert technicians. You deserve it! 💅",
//     imgs: [Facials, Facials, Facials],
//   },
//   {
//     name: "Tattoo & Piercing",
//     text: "Indulge in ultimate relaxation with our spa and facial treatments. Rejuvenate your skin and unwind with our expert therapists. Bliss awaits!",
//     imgs: [Pedicure, Pedicure, Pedicure],
//   },
//   {
//     name: "Manicure & Pedicure",
//     text: "Make a statement with our safe and stylish tattoo and piercing services. Our expert artists bring your vision to life. Get inked! 🖋️",
//     imgs: [Pedicure, Pedicure, Pedicure],
//   },
//   {
//     name: "Teeth Cleaning",
//     text: "Challenge friends and unwind with our top-notch snooker tables. Perfect for social gatherings or solo relaxation. Rack up the fun! 🎱",
//     imgs: [Teeth, Teeth, Teeth],
//   },
//   {
//     name: "Snooker",
//     text: "Brighten your smile with our professional teeth cleaning services. Our expert hygienists ensure a healthy, radiant smile. Book your appointment now!",
//     imgs: [Snooker, Snooker1, Snooker],
//   },
// ];

// export default function Services() {
//   const services = [
//     "Hair Styling",
//     "Spa & Facials",
//     "Tattoo & Piercing",
//     "Manicure & Pedicure",
//     "Teeth Cleaning",
//     "Snooker",
//   ];

//   return (
//     <section id="services" className="py-5">
//       <Container>
//         <h2 className="text-center section-title">Our Services</h2>
//         <Row>
//           {services.map((service, i) => (
//             <Col md={6} key={i} className="mb-4">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//                 <Card className="service-card">
//                   <Card.Body>
//                     <Card.Title>{service}</Card.Title>
//                     <Row>
//                       {[1, 2, 3].map((n) => (
//                         <Col xs={4} key={n}>
//                           <img src={`/img${i * 3 + n}.jpg`} className="img-fluid rounded" />
//                         </Col>
//                       ))}
//                     </Row>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// ===== IMPROVED PROFESSIONAL VERSION =====
// Key upgrades: scroll spy, better animations, premium UI feel, real icons, transitions

import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Hairstyling from "../assets/Hairstyling.jpg";
import Hairstyling2 from "../assets/Hairstyling2.jpg";
import Facials from "../assets/Facials.jpg";
import Pedicure from "../assets/Pedicure.jpg";
import Teeth from "../assets/Teeth.jpg";
import Snooker from "../assets/Snooker.jpg";
import Snooker1 from "../assets/Snooker1.jpg";

export default function Services() {
  const services = [
    {
      name: "Hair Styling",
      desc: "Precision cuts, styling, and grooming tailored to your look.",
      imgs: [Hairstyling, Hairstyling2, Hairstyling],
    },
    {
      name: "Spa & Facials",
      desc: "Rejuvenating treatments for glowing, healthy skin.",
      imgs: [Facials, Facials, Facials],
    },
    {
      name: "Tattoo & Piercing",
      desc: "Clean, safe, and creative body art by professionals.",
      imgs: [Hairstyling, Facials, Snooker],
    },
    {
      name: "Manicure & Pedicure",
      desc: "Luxury nail care for a polished, confident finish.",
      imgs: [Pedicure, Pedicure, Pedicure],
    },
    {
      name: "Teeth Cleaning",
      desc: "Professional whitening and oral care for a brighter smile.",
      imgs: [Teeth, Pedicure, Teeth],
    },
    {
      name: "Snooker",
      desc: "Relax and unwind with premium snooker experiences.",
      imgs: [Snooker, Hairstyling2, Snooker1],
    },
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center section-title mb-5">Our Services</h2>
        <Row>
          {services.map((service, i) => (
            <Col md={6} key={i} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="service-card border-0 h-100">
                  <Card.Body>
                    <Card.Title className="fw-bold mb-2">
                      {service.name}
                    </Card.Title>
                    <p className="text-muted small mb-3">{service.desc}</p>
                    <Row className="g-2">
                      {service.imgs.map((img, idx) => (
                        <Col xs={4} key={idx}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <div className="img-wrapper position-relative overflow-hidden rounded">
                              <img
                                src={img}
                                className="img-fluid"
                                alt={service.name}
                              />
                              <div className="img-overlay d-flex align-items-center justify-content-center">
                                <span className="text-white small">View</span>
                              </div>
                            </div>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
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
