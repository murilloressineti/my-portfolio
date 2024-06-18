import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { InitialIcons } from "../../components/InitialIcons";
import { Button } from "../../components/Button";
import { SkillCard } from "../../components/SkillCard";
import { Gallery } from "../../components/Gallery";

import imageBackground from "../../assets/photo.jpg";
import projectsCard from "../../assets/projects-card/thumb.png";

export function Home() {
  return (
    <Container>
      <Header/>

      <Content>
        <Section>
          <div class="hero">
            <h3>Olá 👋, sou o Murillo Ressineti</h3>
            <h2>FRONT-END DEVELOPER</h2>
            <p>Desenvolvedor front-end comprometido com a criação de soluções web modernas.</p>

            <InitialIcons/>

            <div class="background">
              <img src={imageBackground} alt="Imagem Murillo Ressineti" />
            </div>
          </div>
        </Section>

        <Section>
          <div className="projects">
            <h2>Projetos</h2>
            <p>Meus trabalhos recentes: exemplos concretos das minhas capacidades técnicas.</p>

            <div className="card">
              <img src={projectsCard} alt="Card demonstrando projeto realizado"/>
              <p>Site institucional responsivo para gráfica, exibindo serviços, portfólio e contato.</p>

              <div className="buttons">
                <Button title={"Acessar"} href={"https://dsrgrafica.com.br/"}></Button>
                <Button title={"Repositório"} href={"https://github.com/murilloressineti/dsr-grafica"}></Button>
              </div>
            </div>

            <div className="card">
              <img src={projectsCard} alt="Card demonstrando projeto realizado"/>
              <p>Gerenciador de filmes, desenvolvido no bootcamp da Rocketseat.</p>

              <div className="buttons">
                <Button title={"Acessar"} href={"https://rockmovies.netlify.app/"}></Button>
                <Button title={"Repositório"} href={"https://github.com/murilloressineti/rocketmovies-frontend"}></Button>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="skills">
            <h2>Habilidades</h2>
            <p>Minhas especialidades: técnicas e conhecimentos essenciais para tecnologias web.</p>

            <SkillCard></SkillCard>
            
          </div>
        </Section>

        <Section>
          <div className="about-me">
            <div className="about-me-subtitle">
              <h2>Sobre mim</h2>
              <h3>CONHEÇA + SOBRE MIM </h3>
            </div>

            <Gallery></Gallery>
          </div>
        </Section>

      </Content>

    </Container>
  );
}
