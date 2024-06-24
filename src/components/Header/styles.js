import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 7.5rem;
  width: 100%;

  color: ${({ theme }) => theme.COLORS.GRAY_50};

  padding: 1.6rem;
  margin-bottom: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.5);
`;
