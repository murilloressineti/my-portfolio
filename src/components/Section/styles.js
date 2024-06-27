import styled from "styled-components";

export const Container = styled.section`
  margin: 6.4rem 0 6.4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_70};

  @media (min-width: 768px) {
    margin-top: 10.6rem;
  }
`;