import React, { useState } from "react";
import { Container } from "./styles";
import card1 from "../../assets/about-me/mae.jpg";
import card2 from "../../assets/about-me/photo-test.jpg";
import card3 from "../../assets/about-me/anna.jpg";
import card4 from "../../assets/about-me/photo-test.jpg";
import card5 from "../../assets/about-me/guitar.jpg";
import card6 from "../../assets/about-me/photo-test.jpg";

export function Gallery() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    setScrollPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const handleScrollRight = () => {
    setScrollPosition((prevPosition) => Math.min(prevPosition + 1, 1)); // Ajuste este valor conforme necessário
  };

  return (
    <>
      <button onClick={handleScrollLeft}>{'<'}</button>
      <button onClick={handleScrollRight}>{'>'}</button>
      <Container scrollPosition={scrollPosition}>
        <figure className="fig1">
          <img src={card1} alt="Figura 1" />
        </figure>
        <figure className="fig2">
          <img src={card2} alt="Figura 2" />
        </figure>
        <figure className="fig3">
          <img src={card3} alt="Figura 3" />
        </figure>
        <figure className="fig4">
          <img src={card4} alt="Figura 4" />
        </figure>
        <figure className="fig5">
          <img src={card5} alt="Figura 5" />
        </figure>
        <figure className="fig6">
          <img src={card6} alt="Figura 6" />
        </figure>
      </Container>
    </>
  );
}
