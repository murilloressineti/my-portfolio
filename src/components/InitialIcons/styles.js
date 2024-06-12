import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 1.2rem;

    button {
        border: none;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;
        z-index: 0;
    }

    button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0.15));
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
    }

    button:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    button:hover::before {
        opacity: 1;
    }

    .download {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.4rem;
        font-weight: bold;
        padding: .4rem .4rem .4rem 1.6rem;

        border-radius: 10rem;
        text-transform: uppercase;
        background-color: ${({ theme }) => theme.COLORS.BLUE};

        img {
            padding: 1rem;
            margin-left: 1.2rem;
            background-color: ${({ theme }) => theme.COLORS.BLACK};
            border-radius: 50%;
        }

    }

    .linkedin, .github {
        width: 4.8rem;
        height: 4.8rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.BLACK};

        img {
            padding: 1rem;
            border-radius: 50%;
        }

    }
`