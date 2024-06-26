import { Container, Content } from "./styles";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { InitialIcons } from "../../components/InitialIcons";
import { Button } from "../../components/Button";
import { SkillCardMobile } from "../../components/SkillCardMobile";
import { SkillCardDesktop } from "../../components/SkillCardDesktop";
import { Gallery } from "../../components/Gallery";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";

import imageBackground from "../../assets/photo.jpg";
import projectsCard from "../../assets/projects-card/thumb.png";

export function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <Section>
          <div id="hero" className="hero">
            <div class="hero-content">
              <h3>Olá 👋, sou o Murillo Ressineti</h3>
              <h2>FRONT-END DEVELOPER</h2>
              <p>
                Desenvolvedor front-end comprometido com a criação de soluções web
                modernas.
              </p>
              <InitialIcons />
            </div>

            <div class="background">
              <img src={imageBackground} alt="Imagem Murillo Ressineti" />
            </div>
          </div>
        </Section>

        <Section>
          <div id="projects" className="projects">
            <div className="projects-content">
              <h2>Projetos</h2>
              <p>
                Meus trabalhos recentes: exemplos concretos das minhas capacidades
                técnicas.
              </p>
            </div>

            <div className="cards">
              <div class="card">
                <img 
                  class="image-card"
                  src={projectsCard}
                  alt="Card demonstrando projeto realizado"
                />
                <p>
                  Site institucional responsivo para gráfica, exibindo serviços,
                  portfólio e contato.
                </p>
                <div class="buttons">
                  <Button
                    title={"Acessar"}
                    href={"https://dsrgrafica.com.br/"}
                  ></Button>
                  <Button
                    title={"Repositório"}
                    href={"https://github.com/murilloressineti/dsr-grafica"}
                  ></Button>
                </div>
              </div>
              <div class="card">
                <img
                  class="image-card"
                  src={projectsCard}
                  alt="Card demonstrando projeto realizado"
                />
                <p>
                  Gerenciador de filmes, desenvolvido no bootcamp da Rocketseat.
                </p>
                <div class="buttons">
                  <Button
                    title={"Acessar"}
                    href={"https://rockmovies.netlify.app/"}
                  ></Button>
                  <Button
                    title={"Repositório"}
                    href={
                      "https://github.com/murilloressineti/rocketmovies-frontend"
                    }
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div id="skills" className="skills">
            <div className="skills-content">
              <h2>Habilidades</h2>
              <p>
                Minhas especialidades: técnicas e conhecimentos essenciais para
                tecnologias web.
              </p>
            </div>

            {isMobile ? <SkillCardMobile /> : <SkillCardDesktop />}
          </div>
        </Section>

        <Section>
          <div id="about-me" className="about-me">
            <div class="about-me-content">
              <h2>Sobre mim</h2>
              <Link to="/sobre-mim">
                <h3>Conheça + sobre mim</h3>
              </Link>
            </div>

            <Gallery></Gallery>
          </div>
        </Section>

        <Section>
          <div id="form" className="form">
            <Form />
          </div>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
