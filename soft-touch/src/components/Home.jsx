import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Hairstyling1 from "../../public/Hairstyling1.mp4";

export default function Home() {
  return (
    <section id="home" className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src={Hairstyling1} type="video/mp4" />
      </video>

      <div className="overlay" />

      <Container className="text-center hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Soft Touch Studio & Spa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Luxury grooming • Spa • Lifestyle experience
        </motion.p>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Button size="lg" className="cta-btn">
            Book Appointment
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

//////////////////
// import { Container, Button } from "react-bootstrap";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <section
//       id="home"
//       className="vh-100 d-flex align-items-center text-center"
//       style={{ background: "url('/video1.mp4') center/cover no-repeat" }}
//     >
//       <Container>
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="display-3 fw-bold"
//         >
//           Soft Touch Studio & Spa
//         </motion.h1>
//         <p className="lead">
//           Luxury grooming, relaxation & lifestyle experience
//         </p>
//         <Button size="lg">Book Appointment</Button>
//       </Container>
//     </section>
//   );
// }
