import React from "react";
import { IconTypes } from "../icon-types";
import styled from "styled-components";

const StyledHamburger = styled.svg.attrs(({ style }: IconTypes & { style?: object }) => ({
  style
}))<IconTypes>``;

export const Hamburger = ({ width = "54px", height = "54px", color = "currentColor", inlineStyles }: IconTypes) => {
  return (
    <StyledHamburger
      style={inlineStyles}
      width={width}
      height={height}
      viewBox="0 -53 384 384"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
      />
      <path
        fill={color}
        d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
      />
      <path
        fill={color}
        d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
      />
    </StyledHamburger>
  );
};
