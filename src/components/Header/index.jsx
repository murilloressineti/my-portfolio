import React, { useState, useEffect } from "react";
import { Container, Nav, NavMenu, MenuToggle } from "./styles";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiOutlineTool, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import logo from "../../assets/logo.png";

export function Header() {
  const [isopen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleToggle = () => {
    setIsOpen(!isopen);
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
        <img src={logo} alt="Logotipo do portfólio. Letras 'MR' representando as iniciais de Murillo Ressineti." className="logo" />
      </Link>
      <MenuToggle isopen={isopen ? "true" : undefined} onClick={handleToggle}>
        <FaBars />
      </MenuToggle>
      <Nav isopen={isopen ? "true" : undefined}>
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
