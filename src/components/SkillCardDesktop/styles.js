import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  overflow: hidden;

`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6em;
  transition: transform 0.3s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 0.1}%)`};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Arrow = styled.img`
  cursor: pointer;

  &.inverted {
    transform: rotate(180deg);
  }
`;
