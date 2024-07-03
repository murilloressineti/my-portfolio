import styled, { css } from "styled-components";

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
  position: static;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  z-index: 1000;

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_50};
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    padding: 0 8rem;
  }

  @media (min-width: 1024px) {
    padding: 0 14rem;
  }
`;

export const MenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme, isopen }) => (isopen ? theme.COLORS.BLUE : theme.COLORS.GRAY_50)};
  display: flex;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.COLORS.BLUE};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: 7.5rem;
  right: 0;
  width: 10%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: -0.1rem 0.2rem 0.4rem rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, visibility 0s linear 0.3s, transform 0.3s ease;

  ${({ isopen }) =>
    isopen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: opacity 0.3s ease, visibility 0s linear, transform 0.3s ease;
    `}

  @media (min-width: 768px) {
    position: static;
    display: flex;
    width: auto;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;

  li {
    margin: 1rem 0;

    button {
      background: none;
      border: none;
      font-size: 1.6rem;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.GRAY_50};
      cursor: pointer;

      svg {
        font-size: 2rem;
      }

      &:hover {
        color: ${({ theme }) => theme.COLORS.BLUE};
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;

    li {
      margin: 0 1rem;
    }
  }
`;
