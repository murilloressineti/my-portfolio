import { useState } from "react";
import { Container, Nav, NavMenu, MenuToggle } from "./styles";
import { Link } from "react-router-dom";
import { FaBars, FaProjectDiagram, FaLaptopCode, FaUser, FaEnvelope } from "react-icons/fa";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <Container>
      <Link to={"/"}>
        <h1>Ressineti.dev</h1>
      </Link>
      <MenuToggle onClick={handleToggle}>
        <FaBars />
      </MenuToggle>
      <Nav isOpen={isOpen}>
        <NavMenu>
          <li>
            <button onClick={() => handleScrollToSection("projects")}>
              <FaProjectDiagram />
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("skills")}>
              <FaLaptopCode />
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("about-me")}>
              <FaUser />
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("form")}>
              <FaEnvelope />
            </button>
          </li>
        </NavMenu>
      </Nav>
    </Container>
  );
}
