import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lato:wght@100;300;400;700&display=swap");
 html {
    --black: #272727;
    --pink: #ffd700;
    --font: "Lato", sans-serif;
    --font2: "Dela Gothic One", cursive;
    --lightGray: #c4c4c4;
    --darkGray: #828282;
    --grayBorder: #373737;
    --basicShadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
    --black: rgb(0, 0, 0);
    --black-75: rgba(0, 0, 0, 0.75);
    --black-50: rgba(0, 0, 0, 0.50);
    --black-25: rgba(0, 0, 0, 0.25);
    --black-10: rgba(0, 0, 0, 0.10);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: var(--font);
    outline: none;    
  }
  
  button {
    cursor: pointer;
    border:none;
  }

  .flex_cb {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex_cc {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex_ccc {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .grid_c {
    display: grid;
    place-items: center
  }

`;
