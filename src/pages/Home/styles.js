import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 7.5rem auto;
  grid-template-areas:
    "header"
    "content";

  .hero {
    max-width: 21.5rem;

    h2 {
      font-size: 5.8rem;
      line-height: 90%;
      letter-spacing: .018rem;
    }
  }
`;
