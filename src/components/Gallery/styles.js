import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  height: 40rem;
  
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE_TRANSPARENT};
  padding-bottom: 6.4rem;
  overflow: hidden; /* Para esconder as imagens que estiverem fora da área visível */

  transform: ${({ scrollPosition }) =>
    `translateX(-${scrollPosition * 30}%)`}; /* Ajuste aqui conforme necessário */
  transition: transform 0.5s ease-in-out; /* Transição suave */

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