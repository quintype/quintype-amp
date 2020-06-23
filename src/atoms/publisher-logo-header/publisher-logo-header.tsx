import React from "react";
import { StyledPublisherLogoHeaderTypes, PublisherLogoHeaderTypes } from "./types";
import styled from "styled-components";

export const StyledPublisherLogoHeader = styled.a.attrs(({ style }: StyledPublisherLogoHeaderTypes) => ({
  style
}))<StyledPublisherLogoHeaderTypes>``;

export const PublisherLogoHeader = ({
  logoSrc,
  width = "200px",
  height = "50px",
  publisherName,
  inlineStyles
}: PublisherLogoHeaderTypes) => {
  return (
    <StyledPublisherLogoHeader href="/" style={inlineStyles}>
      <amp-img alt={publisherName} src={logoSrc} width={width} height={height} />
    </StyledPublisherLogoHeader>
  );
};
