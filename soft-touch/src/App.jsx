import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Moon, Sun } from "lucide-react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-dark text-light" : "bg-light text-dark"}>
      <Navbar
        expand="lg"
        bg={dark ? "dark" : "light"}
        variant={dark ? "dark" : "light"}
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="fw-bold">Soft Touch</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              {["home", "about", "services", "gallery", "contact"].map(
                (item) => (
                  <Nav.Link
                    key={item}
                    href={`#${item}`}
                    onClick={() =>
                      document
                        .querySelector(".navbar-collapse")
                        ?.classList.remove("show")
                    }
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Nav.Link>
                ),
              )}
            </Nav>
            <Button
              className="ms-lg-3 mt-2 mt-lg-0"
              onClick={() => setDark(!dark)}
            >
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
