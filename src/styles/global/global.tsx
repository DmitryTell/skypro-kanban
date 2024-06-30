import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &::before,
        &::after {
        box-sizing: border-box;
        }
    }

    body {
        font-family: Roboto;
        overflow: hidden;
    }

    input,
    textarea {
        outline: none;
    }

    button {
        cursor: pointer;
    }

    ul li {
        list-style: none;
    }

    @-webkit-keyframes loading-animation {
        0% {
            background: #C1CDDC;
        }
        50% {
            background: #E9EEF7;
        }
        100% {
            background: #C1CDDC;
        }
    }

    @keyframes loading-animation {
        0% {
            background: #C1CDDC;
        }
        50% {
            background: #E9EEF7;
        }
        100% {
            background: #C1CDDC;
        }
    }
`;
