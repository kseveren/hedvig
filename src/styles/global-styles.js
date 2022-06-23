import { createGlobalStyle } from 'styled-components';
import { getFontFaces } from './typography';

export const GlobalStyles = createGlobalStyle`
  ${getFontFaces()}
  
  html {
    height: 100%;
    font-size: 100%;
    line-height: 1.5;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    min-width: 320px;
    min-height: 100%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({ theme }) => theme.typography.family}, sans-serif;
    color: ${({ theme }) => theme.colors.gray900};
    background-color: ${({ theme }) => theme.colors.gray100};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  a,
  label,
  button {
    -webkit-tap-highlight-color: transparent;
  }

  img {
    max-width: 100%;
    border-style: none;
  }

  sup {
    vertical-align: super;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: inherit;
  }

  figure,
  p {
    margin: 0;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
    min-width: 0;
  }

  br {
    opacity: 0;
    visibility: hidden;
  }

  a {
    text-decoration: none;
    background-color: transparent;
    color: inherit;

    &:hover,
    &:focus {
      color: inherit;
    }
  }

  b,
  strong {
    font-weight: 700;
  }

  input,
  button {
    font-size: inherit;
    font-family: inherit;
  }
`;
