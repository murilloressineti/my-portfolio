import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BLACK};

        --webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Manrope", sans-serif;
        outline: none;
    }

    h1, h2, h3 {
        font-family: "Bebas Neue", sans-serif;
        outline: none;
    }

    h2 {
        font-size: 4.4rem;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }
`;
