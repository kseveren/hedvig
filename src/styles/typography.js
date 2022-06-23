const fonts = {
  HEDVIG_LETTERS_STANDARD: 'HedvigLetters-Standard',
};

const fontFlavors = {
  [fonts.HEDVIG_LETTERS_STANDARD]: [{ width: 400, style: 'normal' }],
};

const typography = {
  family: fonts.HEDVIG_LETTERS_STANDARD,
  baseSize: '16px',
};

const getFontFaces = () =>
  Object.keys(fontFlavors)
    .map((fontName) =>
      fontFlavors[fontName]
        .map(
          (flavour) => `
  @font-face {
    font-family: "${fontName}";
    font-style: ${flavour.style};
    font-weight: ${flavour.weight};
    src: url("https://cdn.hedvig.com/identity/fonts/${fontName}.woff2") format("woff2");
    font-display: swap;
  }
`,
        )
        .join('\n'),
    )
    .join('\n');

export { typography, getFontFaces };
