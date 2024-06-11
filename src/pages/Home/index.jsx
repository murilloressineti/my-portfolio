import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Header/>

      <main>
        <Section>
          <div class="hero">
            <p>Olá 👋, sou o Murillo Ressineti</p>
            <h2>FRONT-END DEVELOPER</h2>
            <p>Desenvolvedor front-end comprometido com a criação de soluções web modernas.</p>

            <div></div>
          </div>

          <div class="background"></div>

        </Section>

      </main>

    </Container>
  );
}
