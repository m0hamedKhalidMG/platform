// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Cairo', sans-serif;
    background: #f0f2f5;
    color: #333;
    line-height: 1.6;
    transition: background 0.3s ease;
    direction: rtl;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5 {
    margin: 15px 0;
    color: #222;
    font-weight: 600;
  }

  p {
    margin: 15px 0;
    color: #555;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyles;
