import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --dark-color: #102A42;
        --main-color: #C59D5F;
        --light-dark: #787878;
        --white-color: #ffffff;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }

    h1, h2, h3, h4 {
        color: var(--dark-color);
    }
`;

export default GlobalStyle;
