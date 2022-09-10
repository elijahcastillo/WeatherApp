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


    //Loading css
    .everyLoad {
    background: #f8f8f8;
    position: relative;
    overflow-x: hidden;
    border-radius: 12px;
  }
  .everyLoad::after {
    content: "";
    animation: shine 1.6s infinite;
    width: 60px;
    height: 100%;
    background-image: linear-gradient(
      to right,
      #ebebeb,
      #e6e7e8,
      #dfe3e3,
      #dadfdd,
      #f2f4f0
    );
    position: absolute;
    left: 0;
    filter: blur(4px);
  }
  @keyframes shine {
    0% {
      left: -50px;
    }
    100% {
      transform: translateX(350px);
    }
  }

`;
