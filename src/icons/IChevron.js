export const IChevron = ({ fill, size, ...rest }) => (
  <svg
    width={size || 16}
    height={size || 16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    {...rest}
  >
    <path d="M8 10.873L1.127 4 0 5.127l7.437 7.436a.797.797 0 001.126 0L16 5.127 14.873 4 8 10.873z" />
  </svg>
);
