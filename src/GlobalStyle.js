import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-image: linear-gradient(to right, #C680FF, #633CCB);
        overflow: hidden;
        font-family: sans-serif;
        box-sizing: border-box;
    };

    html {
        margin: 0;
        padding: 0;
    };
`;

export default GlobalStyle;