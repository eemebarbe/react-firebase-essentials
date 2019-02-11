import Kollektif from "./fonts/Kollektif.ttf";
import KollektifBold from "./fonts/Kollektif-Bold.ttf";
import { metrics } from "../themes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
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
    font-size: ${metrics.baseUnit * 1.5}px;
    line-height: 2;
    ::selection {
      background: red; /* WebKit/Blink Browsers */
    } 
    ::-moz-selection {
      background: red; /* Gecko Browsers */
    }
  }
  #root {
      height: 100%; 
  }`;

export default GlobalStyle;
