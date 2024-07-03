import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: opacity 0.3s ease-in-out;
    opacity: ${({ istransitioning }) => (istransitioning === "true" ? 0 : 1)};
  }
`;

export const Arrow = styled.img`
  cursor: pointer;

  &.inverted {
    transform: rotate(180deg);
  }
`;
