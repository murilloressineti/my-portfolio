import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { InitialIcons } from "../../components/InitialIcons";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";

import imageBackgroundAboutMe from "../../assets/about-me/background.png";

export function AboutMe() {
  return (
    <Container>
      <Header></Header>

      <Content>
        <Section>
          <div className="about-me">
            <div className="about-me-content">
              <h2>Sobre mim</h2>
              <div className="about-me-text">
                <h4>
                  Desenvolvedor front-end comprometido com a criação de soluções
                  web modernas.
                </h4>
                <p>
                  Minha jornada na tecnologia começou com o estudo de Python,
                  mas logo descobri meu interesse pelo front-end. Determinado a
                  aprimorar minhas habilidades, ingressei no bootcamp da
                  Rocketseat, onde aprendi tecnologias web full-stack como HTML,
                  CSS, JavaScript, React e Node.js.
                </p>
                <p>
                  Atualmente, estou focado na transição de carreira e trabalho
                  como desenvolvedor freelancer, criando landing pages e páginas
                  institucionais que atendem às necessidades específicas de cada
                  cliente.
                </p>
                <p>
                  Quando não estou programando, gosto de tocar guitarra, ler
                  livros, ir à academia, jogar videogame, assistir futebol e
                  Fórmula 1, além de passar tempo com minha namorada e nossa
                  cachorrinha.
                </p>
                <p>
                  Estou sempre em busca de crescimento pessoal e profissional.
                  Acredito em projetos que realmente façam a diferença no dia a
                  dia das pessoas, resolvendo problemas e facilitando a vida,
                  contribuindo assim para um mundo mais conectado e eficiente.
                </p>
                <InitialIcons />
              </div>
            </div>

            <div class="background">
              <img
                src={imageBackgroundAboutMe}
                alt="Imagem Murillo Ressineti"
              />
            </div>
          </div>
        </Section>

        <Section>
          <div className="skills">
            <div className="skills-title">
              <h2>Habilidades</h2>
            </div>

            <div className="skills-content">
              <p>
                Busco constantemente aprendizado e aprimoramento. Trabalho com
                tecnologias do lado front-end e back-end, focando em criar
                interfaces web responsivas e intuitivas para projetos de alta
                qualidade.
              </p>
              <div className="tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MySQL</span>
                <span className="tag">Figma</span>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="experience">
            <div className="experience-title">
              <h2>Experiência</h2>
            </div>

            <div className="experience-content">
              <div className="experiece-data">
                <h4>Desenvolvedor Freelancer</h4>
                <p>Jun 2024 — Presente</p>
              </div>
              <p>
                Como freelancer, crio páginas institucionais e landing pages
                personalizadas. Utilizo JavaScript, React, HTML, CSS e Figma
                para desenvolver experiências web de alta qualidade, garantindo
                a satisfação do cliente e a usabilidade do produto.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="form">
            <Form></Form>
          </div>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
