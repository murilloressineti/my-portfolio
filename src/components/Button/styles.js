import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  width: 100%;
  height: 4.5rem;

  padding: 1.6rem;
  border: none;
  border-radius: 10rem;

  font-size: 1.6rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0.1rem 0.9rem rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    padding: 0.5rem;

    width: 2rem;
    height: 2rem;
  }

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  }

  &:hover span {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &:active {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
