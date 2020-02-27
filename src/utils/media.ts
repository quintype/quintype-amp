import { css } from "styled-components";

const breakpoints = {
  phone: "480px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px"
};

interface Media {
  phone: Function;
  tablet: Function;
  laptop: Function;
  desktop: Function;
}

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => {
    // @ts-ignore
    const rules = css(...args);

    return css`
      @media (min-width: ${breakpoints[label]}) {
        ${rules};
      }
    `;
  };
  return acc;
}, {}) as Media;

export { media };
