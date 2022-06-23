export const mixins = {
  transition: (property, duration = '0.15s') =>
    `
      transition-property: ${property};
      transition-duration: ${duration};
      transition-timing-function: ease-in-out;
    `,

  resetButton: () =>
    `
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      text-align: inherit;
      cursor: pointer;
      background-color: transparent;
      color: inherit;
      font: inherit;
      line-height: normal;
      box-sizing: border-box;
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      
      &::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      
      // &:focus,
      // &:hover,
      // &:active {
      //   outline: none;
      //   border: none;
      // }
    `,

  resetInput: () =>
    `
      display: block;
      width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      border-radius: 0;
      background-image: none;
      background-color: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      font-weight: normal;
      font-family: inherit;
      color: inherit;
      appearance: none;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
          -webkit-appearance: none;
      }

      &::-ms-clear {
          display: none;
      }
  
      &:focus,
      &:hover,
      &:active {
        outline: none;
        border: none;
      }
    `,

  resetLink: () =>
    `
      color: inherit;
      text-decoration: none;
      box-sizing: border-box;
      
      &:active {
        outline: none;
      }
    `,

  resetList: () =>
    `
      list-style: none;
      margin: 0;
      padding: 0;
    `,

  visuallyHidden: () =>
    `
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      height: 0;
      width: 0;
      margin: -1px;
      padding: 0;
      border: 0;
    `,

  objectFit: (property = 'none', direction = 'center') =>
    `
      object-fit: ${property};
      object-position: ${direction};
      font-family: "object-fit: ${property}; object-position: ${direction};";
    `,
};
