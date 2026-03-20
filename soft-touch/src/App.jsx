import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Moon, Sun } from "lucide-react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./index.css";
import Logo from "./assets/Logo.jpg";

export default function App() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>
      <Navbar
        expand="lg"
        sticky="top"
        bg={dark ? "dark" : "light"}
        variant={dark ? "dark" : "light"}
        className="glass-navbar"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center gap-2"
          >
            <img src={Logo} width="45" height="45" className="rounded-circle" />
            <span className="fw-bold">Soft Touch</span>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto text-center">
              {["home", "about", "services", "gallery", "contact"].map(
                (item) => (
                  <Nav.Link
                    key={item}
                    href={`#${item}`}
                    className={active === item ? "active-link" : ""}
                    onClick={() =>
                      document
                        .querySelector(".navbar-collapse")
                        ?.classList.remove("show")
                    }
                  >
                    {item.toUpperCase()}
                  </Nav.Link>
                ),
              )}
            </Nav>

            <Button className="ms-3 toggle-btn" onClick={() => setDark(!dark)}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Home />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
}

///////////////////////
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import { Moon, Sun } from "lucide-react";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";
// import "./index.css";
// import Logo from "./assets/Logo.jpg";

// export default function App() {
//   const [dark, setDark] = useState(false);

//   return (
//     <div className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
//       <Navbar
//         expand="lg"
//         bg={dark ? "dark" : "light"}
//         variant={dark ? "dark" : "light"}
//         sticky="top"
//       >
//         <Container>
//           <Navbar.Brand href="/">
//             <img
//               src={Logo}
//               alt="Logo"
//               width="50"
//               height="50"
//               className="d-inline-block align-top me-2"
//             />
//             Crown Piano Studio
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto text-center">
//               {["home", "about", "services", "gallery", "contact"].map(
//                 (item) => (
//                   <Nav.Link
//                     key={item}
//                     href={`#${item}`}
//                     onClick={() =>
//                       document
//                         .querySelector(".navbar-collapse")
//                         ?.classList.remove("show")
//                     }
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </Nav.Link>
//                 ),
//               )}
//             </Nav>
//             <Button
//               className="ms-lg-3 mt-2 mt-lg-0"
//               onClick={() => setDark(!dark)}
//             >
//               {dark ? <Sun size={18} /> : <Moon size={18} />}
//             </Button>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Home />
//       <About />
//       <Services />
//       <Gallery />
//       <Contact />
//     </div>
//   );
// }
