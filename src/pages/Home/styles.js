import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 7.5rem auto;
  grid-template-areas:
    "header"
    "content";

  section:first-child{
    margin-top: 4rem;
  }
`

export const Content = styled.main`
  grid-area: content;

  .hero {

    h3 {
      font-size: 1.6rem;
      margin-bottom: 1rem;

      color: ${({ theme }) => theme.COLORS.GRAY_70};
      max-width: 21.5rem;
    }

    h2 {
      font-size: 5.8rem;
      line-height: 90%;
      margin-bottom: 1.2rem;
      max-width: 21.5rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: normal;
      line-height: 160%;

      color: ${({ theme }) => theme.COLORS.GRAY_70};

      margin-bottom: 3.2rem;
    }

    .background {
      margin-top: 6.4rem;
      margin-bottom: 6.4rem;
      text-align: center;
      
      img {
        object-fit: cover;
        height: 40rem;
        width: 100%;
        
        border-radius: 1.6rem;
      }
    }
  }

`