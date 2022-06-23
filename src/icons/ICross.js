export const ICross = ({ fill, size, ...rest }) => (
  <svg
    width={size || 16}
    height={size || 16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    {...rest}
  >
    <path d="M8.625 7.375V0h-1.25v7.375H0v1.25h7.375V16h1.25V8.625H16v-1.25z" />
  </svg>
);
