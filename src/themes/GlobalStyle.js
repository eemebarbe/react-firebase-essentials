import Kollektif from "./fonts/Kollektif.ttf";
import KollektifBold from "./fonts/Kollektif-Bold.ttf";
import { metrics } from "../themes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-size: ${metrics.baseUnit}px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.mainText};
    @font-face {
      font-family: 'Kollektif';
      src: url('${Kollektif}') format('truetype');
    }
    @font-face {
      font-family: 'Kollektif-Bold';
      src: url('${KollektifBold}') format('truetype');
    }
    @media (max-width: 480px){ 
      font-size: ${metrics.baseUnit}px;
    }
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'Kollektif';
    list-style-position: inside;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      box-shadow: 0 0 0px 1000px transparent inset;
      -webkit-text-fill-color: ${props => props.theme.mainText} !important;
    }
  }
  #root {
      height: 100%;
  }`;

export default GlobalStyle;
