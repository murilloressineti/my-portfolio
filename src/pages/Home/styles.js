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

  section:first-child {
    margin-top: 4rem;
  }

  overflow-x: hidden;
`;

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

      .image-card {
        width: 50rem;
      }

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
    .about-me-content {
      padding: 0 1.6rem 0;

      h3 {
        font-size: 1.6rem;
        text-decoration: underline;
        color: ${({ theme }) => theme.COLORS.GRAY_50};
        margin-top: 1.6rem;
        margin-bottom: 1.6rem;
        transition: color 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.COLORS.GRAY_70};
        }
      }
    }
  }

  Section:nth-of-type(4) {
    border-bottom: none;
  }

  .form {
    padding: 0 1.6rem 0;
  }

  Section:nth-of-type(5) {
    border: none;
  }

  @media (min-width: 768px) {
    .hero {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 14rem;
      margin-bottom: 12.8rem;

      .hero-content {
        width: 45rem;

        h3 {
          font-size: 3rem;
          max-width: none;
        }

        h2 {
          font-size: 12.8rem;
          max-width: none;
        }

        p {
          margin-top: 0;
          margin-bottom: 4rem;
          font-size: 1.8rem;
        }
      }

      .background {
        img {
          width: auto;
          height: 60rem;
        }
      }
    }

    .projects {
      padding: 0 14rem;
      margin-bottom: 12.8rem;

      .projects-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        h2 {
          font-size: 7.6rem;
        }

        p {
          font-size: 1.8rem;
          font-weight: bold;
        }
      }

      .cards {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        gap: 14rem;

        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 0;
        }

        .buttons {
          width: 35rem;
        }
      }
    }

    .skills {
      padding: 0 14rem;
      margin-bottom: 12.8rem;

      .skills-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        h2 {
          font-size: 7.6rem;
        }

        p {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 10rem;
        }
      }
    }

    .about-me {
      display: flex;
      flex-direction: column;
      margin-bottom: 12.8rem;

      .about-me-content {
        padding: 0 14rem;
        margin-bottom: 2.8rem;
        
        h2 {
          font-size: 7.6rem;
        }

        h3 {
          font-size: 2.6rem;
        }
      }
    }

    .form {
      display: flex;
      justify-content: center;
      padding: 0 14rem;
      margin-bottom: 12.8rem;
    }
  }
`;
