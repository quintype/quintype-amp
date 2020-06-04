import React from "react";
import { PublisherLogoHeaderTypes } from "./types";
import styled from "styled-components";

const StyledPublisherLogoHeader = styled("amp-img").attrs(({ inlineStyles }: StyledPublisherLogoHeaderTypes) => ({
  style: inlineStyles
}))<StyledPublisherLogoHeaderTypes>``;

export interface StyledPublisherLogoHeaderTypes {
  inlineStyles?: object;
}
export const PublisherLogoHeader = ({
  logoSrc,
  width = "200px",
  height = "50px",
  publisherName,
  inlineStyles
}: PublisherLogoHeaderTypes) => {
  return (
    <a href="/">
      <StyledPublisherLogoHeader
        alt={publisherName}
        src={logoSrc}
        width={width}
        height={height}
        inlineStyles={inlineStyles}
      />
    </a>
  );
};
