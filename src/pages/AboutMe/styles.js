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
  }  
`

export const Content = styled.main`
  grid-area: content;

  h2 {
      margin-bottom: 1.6rem;
    }

  p {
      font-size: 1.6rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.GRAY_50};
      margin-bottom: .8rem;
    }

  .about-me {
    padding: 0 1.6rem 0;
    margin-bottom: 6.4rem;

    h4 {
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 140%;
      letter-spacing: 0%;
      margin-bottom: .8rem;
    }

    div:nth-of-type(1) {
      margin-top: 3.9rem;
    }
    
    .background {
      margin-top: 6rem;
      text-align: center;
      
      img {
        object-fit: cover;
        height: 42.5rem;
        width: 100%;
        
        border-radius: 1.6rem;
        box-shadow: 0 0.1rem 0.9rem rgba(0, 0, 0, 0.2);
      }
    }
  }

  Section:nth-of-type(1) {
    border-bottom: none;
  }

  .skills {
    padding: 0 1.6rem 0;
    margin-bottom: 6.4rem;
  }
`
