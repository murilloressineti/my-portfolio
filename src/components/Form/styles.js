import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  fieldset {
    border: none;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
    padding-bottom: 6.4rem;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  legend {
    margin-bottom: 2.4rem;
  }

  .input-wrapper {
    width: 100%;
  }

  input,
  textarea {
    color: ${({ theme }) => theme.COLORS.GRAY_50};
    font-weight: bold;

    width: 100%;
    padding: 1.2rem 1.8rem;
    margin-bottom: 3rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
    border-radius: 2rem;
    box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1),
      0 0.1rem 0.3rem rgba(0, 0, 0, 0.08);

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.3rem rgba(0, 0, 0, 0.2);
    }
  }

  textarea {
    height: 15rem;
    resize: none;
  }

  button {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    font-weight: bold;

    padding: 1.2rem 2.4rem;
    border: 1px solid black;
    border-radius: 2rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }
`;
