import React, { useState, useEffect } from "react";
import { Container, Nav, NavMenu, MenuToggle } from "./styles";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiOutlineTool, AiOutlineUser, AiOutlineMail } from "react-icons/ai";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Link to={"/"}>
        <h1>Ressineti.dev</h1>
      </Link>
      <MenuToggle isOpen={isOpen} onClick={handleToggle}>
        <FaBars />
      </MenuToggle>
      <Nav isOpen={isOpen}>
        <NavMenu>
          <li>
            <button onClick={() => handleScrollToSection("projects")}>
              {isMobile ? <AiOutlineFundProjectionScreen /> : "Projetos"}
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("skills")}>
              {isMobile ? <AiOutlineTool /> : "Habilidades"}
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("about-me")}>
              {isMobile ? <AiOutlineUser /> : "Sobre Mim"}
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("form")}>
              {isMobile ? <AiOutlineMail /> : "Contato"}
            </button>
          </li>
        </NavMenu>
      </Nav>
    </Container>
  );
}
