import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  height: 40rem;
  width: 130%;
  
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE_TRANSPARENT};
  padding-bottom: 6.4rem;
  overflow: hidden;

  transform: ${({ scrollPosition }) =>
    `translateX(-${scrollPosition * 30}%)`};
  transition: transform 0.5s ease-in-out;

  figure {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .fig1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .fig2 {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
  }

  .fig3 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .fig4 {
    grid-column: 4 / 5;
    grid-row: 1 / 4;
  }

  .fig5 {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }

  .fig6 {
    grid-column: 3 / 4;
    grid-row: 2 / 4;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 40%;
  bottom: 60%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: ${({ isRightClicked }) => (isRightClicked ? 'flex-start' : 'flex-end')};
  padding-right: 6rem;
  padding-left: 4rem;
  transform: ${({ scrollPosition }) => `translateX(${scrollPosition * 35}%)`};
  transition: justify-content 0.8s ease-in-out, transform 0.8s ease-in-out;
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE_TRANSPARENT};
  border: none;
  border-radius: 50%;
  padding: 2rem;
  transition: background-color 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: invert(1);
    width: 1rem;
    height: 1rem;
  }

  &.inverted {
    transform: rotate(180deg);
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;
