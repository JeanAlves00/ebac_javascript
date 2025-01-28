import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #e0f7fa;
        color: #333;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    h1, h2, h3, h4, h5, h6 {
        transition: color 0.3s ease;
    }

    p {
        line-height: 1.6;
        transition: color 0.3s ease;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        transition: color 0.3s ease;

        &:hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;

export default GlobalStyles;