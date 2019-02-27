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
    @media (max-width: 480px){ 
      font-size: ${metrics.baseUnit}px;
    }
  }
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    @font-face {
      font-family: 'Kollektif';
      src: url('${Kollektif}') format('truetype');
    }
    @font-face {
      font-family: 'Kollektif-Bold';
      src: url('${KollektifBold}') format('truetype');
    }
    font-family: 'Kollektif';
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
      box-shadow: 0 0 0px 1000px white inset;
      -webkit-text-fill-color: black !important;
    }
  }
  #root {
      height: 100%;
  }`;

export default GlobalStyle;
