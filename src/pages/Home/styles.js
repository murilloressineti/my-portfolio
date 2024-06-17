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
    padding: 0 1.6rem 0;
    margin-bottom: 6.4rem;

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
      text-align: center;
      
      img {
        object-fit: cover;
        height: 40rem;
        width: 100%;
        
        border-radius: 1.6rem;
        box-shadow: 0 0.1rem 0.9rem rgba(0, 0, 0, 0.2);
      }
    }
  }

  .projects {
    padding: 0 1.6rem 0;
    margin-bottom: 6.4rem;

    display: flex;
    flex-direction: column;

    h2 {
      font-size: 4.4rem;
    }

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_70};
      margin-bottom: 6.4rem;
    }

    .card {
      text-align: center;

      p {
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-size: 1.6rem;
        font-weight: bold;
        margin-top: 4rem;
        margin-bottom: 4rem;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      padding: 0 3rem 0 3rem;
    }

    .card:last-child {
      margin-top: 6.4rem;
    }
  }

  .skills {
    padding: 0 1.6rem 0;
    margin-bottom: 6.4rem;

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_70};
      margin-bottom: 6.4rem;
    }

  }

  .about-me {
    padding: 0 1.6rem 0;
    border-bottom: 2px solid red;

    h3 {
      font-size: 1.6rem;
      text-decoration: underline;
      color: ${({ theme }) => theme.COLORS.GRAY_50};

      margin-top: 1.6rem;
      margin-bottom: 1.6rem;
    }
  }

`