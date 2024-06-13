import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { InitialIcons } from "../../components/InitialIcons";
import { Button } from "../../components/Button";

import imageBackground from "../../assets/photo.jpg";
import thumb from "../../assets/Card/thumb.png";


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
              <img src={thumb} alt="Card demonstrando projeto realizado"/>
              <p>Site institucional responsivo para gráfica, exibindo serviços, portfólio e contato.</p>

              <div className="buttons">
                <Button title={'Acessar'}></Button>
                <Button title={'Repositório'}></Button>
              </div>
            </div>

            <div className="card">
              <img src={thumb} alt="Card demonstrando projeto realizado"/>
              <p>Gerenciador de filmes, desenvolvido no bootcamp da Rocketseat.</p>

              <div className="buttons">
                <Button title={'Acessar'}></Button>
                <Button title={'Repositório'}></Button>
              </div>
            </div>
          </div>
        </Section>

      </Content>

    </Container>
  );
}
