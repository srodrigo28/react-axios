import { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor } from './colors';

export const Global = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        outline: none;
                box-sizing: border-box;
    }
    body{
        font-family: sans-serif;
        background-color: ${primaryDarkColor};
        color: ${primaryDarkColor};
    }
    html, body, #root{
        height: 100%;
    }
    button{
        cursor: pointer;
        background-color: ${primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 700;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
`;