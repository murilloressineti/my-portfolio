import React, { useState } from "react";
import arrowIcon from "../../assets/icons/arrow.svg";
import { Container, ButtonContainer, StyledButton } from "./styles";
import card1 from "../../assets/about-me/mother.jpg";
import card2 from "../../assets/about-me/dev.jpg";
import card3 from "../../assets/about-me/father-sister.jpg";
import card4 from "../../assets/about-me/family.jpg";
import card5 from "../../assets/about-me/guitar.jpg";
import card6 from "../../assets/about-me/myself.jpg";

export function Gallery() {
  const [scrollposition, setScrollPosition] = useState(0);
  const [isrightclicked, setIsRightClicked] = useState(false);

  const handleScrollLeft = () => {
    setScrollPosition((prevPosition) => Math.max(prevPosition - 1, 0));
    setIsRightClicked(false);
  };

  const handleScrollRight = () => {
    setScrollPosition((prevPosition) => Math.min(prevPosition + 1, 1));
    setIsRightClicked(true);
  };

  return (
    <Container scrollposition={scrollposition}>
      <ButtonContainer
        scrollposition={scrollposition}
        isrightclicked={isrightclicked ? "true" : undefined}
      >
        {scrollposition > 0 && (
          <StyledButton onClick={handleScrollLeft} className="inverted">
            <img src={arrowIcon} alt="Arrow" />
          </StyledButton>
        )}
        {scrollposition < 1 && (
          <StyledButton onClick={handleScrollRight}>
            <img src={arrowIcon} alt="Arrow" />
          </StyledButton>
        )}
      </ButtonContainer>

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
  );
}
