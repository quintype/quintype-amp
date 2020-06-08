import React from "react";
import { PublisherLogoHeaderTypes } from "./types";
import styled from "styled-components";

export const StyledPublisherLogoHeader = styled.a.attrs(({ inlineStyles }: StyledPublisherLogoHeaderTypes) => ({
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
    <StyledPublisherLogoHeader href="/" inlineStyles={inlineStyles}>
      <amp-img alt={publisherName} src={logoSrc} width={width} height={height} />
    </StyledPublisherLogoHeader>
  );
};
