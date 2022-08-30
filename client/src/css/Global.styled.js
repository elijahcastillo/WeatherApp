import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;


    }


    body{
        min-height: 100vh;
        
        background-image: linear-gradient(to bottom, #2f75e0, #457cd8, #5783d0, #6689c7, #758fbe);
        color: white;

    }

    img{
        width: 100%;
    }

`;
