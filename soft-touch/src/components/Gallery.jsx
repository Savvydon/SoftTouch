// import { useRef } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Hairstyling from "../assets/Hairstyling.jpg";
// import Hairstyling2 from "../assets/Hairstyling2.jpg";
// import Facials from "../assets/Facials.jpg";
// import Pedicure from "../assets/Pedicure.jpg";
// import Teeth from "../assets/Teeth.jpg";
// import Snooker from "../assets/Snooker.jpg";
// import Snooker1 from "../assets/Snooker1.jpg";
// import vid from "../../public/vid.mp4";
// import vid1 from "../../public/vid1.mp4";
// import vid2 from "../../public/vid2.mp4";
// import vid4 from "../../public/vid4.mp4";
// import vid5 from "../../public/vid5.mp4";
// import Hairstyling1 from "../../public/Hairstyling1.mp4";
// //import vid3 from "../../public/vid3.mp4";

// const images = [
//   Hairstyling,
//   Hairstyling2,
//   Facials,
//   Pedicure,
//   Teeth,
//   Snooker,
//   Snooker1,
// ];

// const videos = [vid, vid1, vid2, vid4, vid5, Hairstyling1];

// // export default function Gallery() {
// //   const videoRefs = useRef([]);

// //   const handlePlay = (index) => {
// //     videoRefs.current.forEach((vid, i) => {
// //       if (i !== index && vid) {
// //         vid.pause();
// //       }
// //     });
// //   };

// //   return (
// //     <section id="gallery" className="py-5">
// //       <Container>
// //         <h2 className="text-center mb-4">Gallery</h2>
// //         <h4>Pictures</h4>
// //         <Row>
// //           {images.map((img, i) => (
// //             <Col md={3} key={i} className="mb-3">
// //               <img src={img} className="img-fluid rounded gallery-media" />
// //             </Col>
// //           ))}
// //         </Row>
// //         <h4 className="mt-5">Videos</h4>
// //         <Row>
// //           {videos.map((vid, i) => (
// //             <Col md={4} key={i} className="mb-3">
// //               <video
// //                 ref={(el) => (videoRefs.current[i] = el)}
// //                 src={vid}
// //                 controls
// //                 className="w-100 rounded gallery-media"
// //                 onPlay={() => handlePlay(i)}
// //               />
// //             </Col>
// //           ))}
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // }

// // import { useRef } from "react";
// // import { Container, Row, Col } from "react-bootstrap";

// export default function Gallery() {
//   const videoRefs = useRef([]);

//   const handlePlay = (index) => {
//     videoRefs.current.forEach((v, i) => i !== index && v?.pause());
//   };

//   return (
//     <section id="gallery" className="py-5">
//       <Container>
//         <h2 className="text-center section-title">Gallery</h2>

//         <Row>
//           {[...Array(23)].map((_, i) => (
//             <Col md={3} key={i} className="mb-3">
//               <div className="img-wrapper">
//                 <img src={`/img${i + 1}.jpg`} className="img-fluid rounded" />
//               </div>
//             </Col>
//           ))}
//         </Row>

//         <Row className="mt-5">
//           {[...Array(10)].map((_, i) => (
//             <Col md={4} key={i}>
//               <video
//                 ref={(el) => (videoRefs.current[i] = el)}
//                 src={`/video${i + 1}.mp4`}
//                 controls
//                 className="w-100 rounded"
//                 onPlay={() => handlePlay(i)}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }

import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hairstyling from "../assets/Hairstyling.jpg";
import Hairstyling2 from "../assets/Hairstyling2.jpg";
import Facials from "../assets/Facials.jpg";
import Pedicure from "../assets/Pedicure.jpg";
import Teeth from "../assets/Teeth.jpg";
import Snooker from "../assets/Snooker.jpg";
import Snooker1 from "../assets/Snooker1.jpg";
import vid from "../../public/vid.mp4";
import vid1 from "../../public/vid1.mp4";
import vid2 from "../../public/vid2.mp4";
import vid4 from "../../public/vid4.mp4";
import vid5 from "../../public/vid5.mp4";
import Hairstyling1 from "../../public/Hairstyling1.mp4";
//import vid3 from "../../public/vid3.mp4";

const images = [
  Hairstyling,
  Hairstyling2,
  Facials,
  Pedicure,
  Teeth,
  Snooker,
  Snooker1,
];
const videos = [vid, vid1, vid2, vid4, vid5, Hairstyling1];

export default function Gallery() {
  const videoRefs = useRef([]);
  const handlePlay = (index) => {
    videoRefs.current.forEach((v, i) => i !== index && v?.pause());
  };

  return (
    <section id="gallery" className="py-5">
      <Container>
        <h2 className="text-center section-title">Gallery</h2>
        <Row>
          {images.map((img, i) => (
            <Col md={3} key={i} className="mb-3">
              <div className="img-wrapper">
                <img
                  src={img}
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          {videos.map((vid, i) => (
            <Col md={4} key={i}>
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={vid}
                controls
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
                className="rounded"
                onPlay={() => handlePlay(i)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
