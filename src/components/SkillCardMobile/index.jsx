import React, { useState, useEffect } from "react";
import { Container, ImageContainer, Arrow } from "./styles";
import arrowIcon from "../../assets/skills-card/arrow.svg";
import htmlIcon from "../../assets/skills-card/html.svg";
import cssIcon from "../../assets/skills-card/css.svg";
import jsIcon from "../../assets/skills-card/js.svg";
import reactIcon from "../../assets/skills-card/react.svg";
import node from "../../assets/skills-card/node.svg";
import mysql from "../../assets/skills-card/mysql.svg";
import figma from "../../assets/skills-card/figma.svg";

const images = [htmlIcon, cssIcon, jsIcon, reactIcon, node, mysql, figma];

export function SkillCardMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [istransitioning, setIsTransitioning] = useState(false);

  const handleSwipe = (direction) => {
    if (!istransitioning) {
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
      <ImageContainer istransitioning={istransitioning ? "true" : undefined}>
        <img src={images[currentIndex]} alt="skill" />
      </ImageContainer>
      <Arrow src={arrowIcon} alt="arrow" onClick={() => handleSwipe("left")} />
    </Container>
  );
}
