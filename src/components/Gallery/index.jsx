import { Container } from "./styles";
import card from "../../assets/about-me/photo-test.jpg";

export function Gallery() {
  return (
    <Container>
      <figure className="fig1">
        <img src={card} alt="Figura 1" />
      </figure>

      <figure className="fig2">
        <img src={card} alt="Figura 2" />
      </figure>

      <figure className="fig3">
        <img src={card} alt="Figura 3" />
      </figure>

      <figure className="fig4">
        <img src={card} alt="Figura 4" />
      </figure>

      <figure className="fig5">
        <img src={card} alt="Figura 5" />
      </figure>

      <figure className="fig6">
        <img src={card} alt="Figura 6" />
      </figure>
    </Container>
  );
}
