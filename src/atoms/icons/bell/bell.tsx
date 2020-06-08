import React from "react";
import { IconTypes } from "../icon-types";
import styled from "styled-components";

export const StyledBell = styled.svg.attrs(({ inlineStyles }: StyledBellTypes) => ({
  style: inlineStyles
}))<StyledBellTypes>``;

export interface StyledBellTypes {
  inlineStyles?: object;
}
export const Bell = ({ color = "currentColor", width = "19", height = "22", inlineStyles }: IconTypes) => {
  return (
    <StyledBell
      inlineStyles={inlineStyles}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 22">
      <path
        fill={color}
        fillRule="nonzero"
        d="M17.643 17.875c.396 0 .72-.136.975-.408.255-.272.382-.587.382-.946 0-.358-.127-.68-.382-.966a1.279 1.279 0 0 1-.127-.172c-.65-.688-1.13-1.36-1.442-2.02-.509-1.146-.763-2.62-.763-4.425 0-1.662-.51-3.109-1.527-4.34-1.018-1.232-2.319-2.006-3.902-2.32v-.903a1.33 1.33 0 0 0-.403-.967A1.296 1.296 0 0 0 9.5 0c-.368 0-.686.136-.954.408a1.33 1.33 0 0 0-.403.967v.902c-1.583.315-2.884 1.089-3.902 2.32-1.018 1.232-1.527 2.679-1.527 4.34 0 1.805-.254 3.28-.763 4.426-.311.66-.792 1.332-1.442 2.02l-.127.172A1.418 1.418 0 0 0 0 16.52c0 .359.127.674.382.946.254.272.58.408.975.408h16.286zM9.5 22c.735 0 1.371-.265 1.908-.795.538-.53.806-1.182.806-1.955H6.786c0 .773.268 1.425.806 1.955.537.53 1.173.795 1.908.795z"
      />
    </StyledBell>
  );
};
