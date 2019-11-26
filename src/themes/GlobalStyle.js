import { metrics } from "../themes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-size: ${metrics.baseUnit}px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.mainText};
    @media (max-width: 480px){ 
      font-size: ${metrics.baseUnit}px;
    }
  }
  body {
    input, textarea, button {
      font-family: inherit;
    }
    font-family: 'Questrial', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smooth: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    overflow: hidden;
    list-style-position: inside;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    input:-webkit-autofill, 
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px ${props =>
        props.theme.background} inset;
      box-shadow: 0 0 0px 1000px ${props => props.theme.background} inset;
      -webkit-text-fill-color: ${props => props.theme.mainText} !important;
      background-color: ${props => props.theme.background} !important;
    }
  }
  #root {
      height: 100%;
  }`;

export default GlobalStyle;
