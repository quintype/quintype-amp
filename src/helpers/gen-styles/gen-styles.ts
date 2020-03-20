import { css, FlattenInterpolation, CSSObject } from "styled-components";
/* Generates custom styles with access to theme object, falls back to basestyles if custom style func is not passed in */
const genStyles = (
  baseStyles: FlattenInterpolation<any>,
  customStyles?: (props) => CSSObject,
  componentProps?: object
): FlattenInterpolation<any> =>
  customStyles
    ? baseStyles.concat(css`
        ${customStyles(componentProps)}
      `)
    : baseStyles;

export { genStyles };
