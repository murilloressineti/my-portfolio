import React, { useState, useEffect } from "react";
import { Container, ImageContainer, Arrow } from "./styles";

import arrowIcon from "../../assets/skills-card/arrow.svg";
import htmlIcon from "../../assets/skills-card/html.svg";
import cssIcon from "../../assets/skills-card/css.svg";
import jsIcon from "../../assets/skills-card/js.svg";
import reactIcon from "../../assets/skills-card/react.svg";

const images = [htmlIcon, cssIcon, jsIcon, reactIcon];

export function SkillCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSwipe = (direction) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        if (direction === "left") {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (direction === "right") {
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          );
        }
        setIsTransitioning(false);
      }, 300);
    }
  };

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX) handleSwipe("left");
      if (touchEndX > touchStartX) handleSwipe("right");
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <Container>
      <Arrow
        src={arrowIcon}
        alt="arrow"
        className="inverted"
        onClick={() => handleSwipe("right")}
      />
      <ImageContainer isTransitioning={isTransitioning}>
        <img src={images[currentIndex]} alt="skill" />
      </ImageContainer>
      <Arrow src={arrowIcon} alt="arrow" onClick={() => handleSwipe("left")} />
    </Container>
  );
}
