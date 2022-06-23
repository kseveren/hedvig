const createBreakpoints = (points) => {
  const keys = Object.keys(points);
  const breakpoints = {};

  keys.forEach((key, index) => {
    const nextPoint = keys[index + 1];
    const nextValuePoint = nextPoint ? points[nextPoint] : 10000;

    if (Object.prototype.hasOwnProperty.call(points, key)) {
      if (!index) {
        breakpoints[key] = `only screen`;
        breakpoints[`${key}_only`] = `only screen and (max-width: ${nextValuePoint - 1}px)`;
      } else {
        breakpoints[key] = `only screen and (min-width: ${points[key]}px)`;
        breakpoints[`${key}_only`] = `only screen and (min-width: ${points[key]}px) and (max-width: ${
          nextValuePoint - 1
        }px)`;
      }
    }
  });

  return breakpoints;
};

const breakpointValues = {
  mobile: 0,
  mobile_large: 400,
  tablet_small: 600,
  tablet: 800,
  laptop: 1024,
};

export const breakpoints = {
  media: createBreakpoints(breakpointValues),
  values: breakpointValues,
};
