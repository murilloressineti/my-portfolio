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

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_50};
  }
`;

export const MenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.GRAY_50};
  display: flex;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 7.5rem;
  right: 0;
  width: 10%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_50};

  @media (min-width: 768px) {
    display: flex;
    position: static;
    width: auto;
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
      color: ${({ theme }) => theme.COLORS.GRAY_50};
      cursor: pointer;

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
