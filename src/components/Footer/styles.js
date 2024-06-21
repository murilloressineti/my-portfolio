import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  margin: auto;
  padding: 6.4rem 1.6rem 3.2rem;

  font-family: "Bebas Neue", sans-serif;
  outline: none;
  font-size: 1.6rem;
  text-align: center;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 1rem;

  button {
    border: none;
    background: none;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;

    img {
      width: 3rem;
      height: 3rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
