import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { InitialIcons } from "../../components/InitialIcons";

import imageBackground from "../../assets/photo.jpg";

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

      </Content>

    </Container>
  );
}
