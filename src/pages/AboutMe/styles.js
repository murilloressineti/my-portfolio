import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 7.5rem auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  header {
    justify-content: center;

    button {
      display: none;
    }
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    header {
      padding: 0 5rem;
      justify-content: left;
    }
  }
`;

export const Content = styled.main`
  grid-area: content;

  h2 {
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_70};
    margin-bottom: 0.8rem;
  }

  .about-me {
    padding: 0 1.6rem 0;
    margin-bottom: 6.4rem;

    h4 {
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 140%;
      letter-spacing: 0%;
      margin-bottom: 0.8rem;
    }

    .about-me-text div {
      margin-top: 4rem;
    }

    .background {
      margin-top: 6rem;
      height: 35rem;
      width: 100%;
      border-radius: 1.6rem;
      box-shadow: 0 0.1rem 0.9rem rgba(0, 0, 0, 0.2);
      background-color: ${({ theme }) => theme.COLORS.GRAY_BACKGROUND};
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        position: absolute;
        bottom: 0;
        object-fit: cover;
        border-radius: 1.6rem;
        max-width: 100%;
        max-height: 100%;
        transition: transform 0.3s ease;
      }

      img:hover{
        transform: scale(1.1);
      }
    }
  }

  Section:nth-of-type(1) {
    border-bottom: none;
  }

  .skills {
    padding: 0 1.6rem 0;
    margin-bottom: 6.4rem;

    .tags {
      padding-top: 1.4rem;
    }

    .tag {
      display: inline-block;
      padding: 1.6rem 2.4rem;
      margin: 0.8rem;
      border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
      border-radius: 10rem;
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.3s ease, color 0.3s ease,
        transform 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.WHITE};
        transform: scale(1.1);
      }
    }
  }

  .experience {
    padding: 0 1.6rem 0;
    margin-bottom: 6.4rem;

    h4 {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
    }

    p:nth-of-type(2) {
      margin-top: 1.2rem;
    }
  }

  .form {
    padding: 0 1.6rem 0;
  }

  Section:nth-of-type(4) {
    border: none;
  }

  @media (min-width: 600px) and (max-width: 1024px) {

    .about-me {
      padding: 0 5rem;

      .about-me-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 8rem;
        gap: 2rem;

        .about-me-text div {
          margin-top: 4.8rem;
        }
      }

      .background {
        margin-bottom: 10rem;
      }
    }

    .skills {
      padding: 0 5rem;
      margin-bottom: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }

    .experience {
      padding: 0 5rem;
      margin-bottom: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      .experience-content > .experience-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .form {
      text-align: center;
      display: flex;
      justify-content: center;
      padding: 0 8rem;
      margin-bottom: 16rem;
    }
  }

  @media (min-width: 1026px) {
    h2 {
      font-size: 8rem;
      width: 100%;
    }

    .about-me {
      padding: 0 10rem;

      .about-me-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 12rem;
        gap: 18rem;

        .about-me-text div {
          margin-top: 4.8rem;
        }
      }

      .background {
        margin-bottom: 12rem;

        img {
          height: 46rem;
          max-width: auto;
        }
      }
      
    }

    .skills {
      padding: 0 10rem;
      margin-bottom: 8rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 32rem;
    }

    .experience {
      padding: 0 10rem;
      margin-bottom: 8rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 32rem;

      .experience-content > .experience-data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .form {
      display: flex;
      justify-content: center;
      padding: 0 14rem;
      margin-bottom: 20rem;
    }
  }
`;
