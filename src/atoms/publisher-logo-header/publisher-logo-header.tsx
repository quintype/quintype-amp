import React from "react";
import styled from "styled-components";
import { PublisherLogoHeaderTypes } from "./types";

const StyledWrapper = styled.span`
  width: 200px;
  height: 50px;
`;

export const PublisherLogoHeader = ({ logoSrc }: PublisherLogoHeaderTypes) => {
  return (
    <StyledWrapper>
      <a href="/">
        <img src={logoSrc} />
      </a>
    </StyledWrapper>
  );
};
