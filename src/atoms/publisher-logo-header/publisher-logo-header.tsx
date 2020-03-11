import React from "react";
import styled from "styled-components";
import { PublisherLogoHeaderTypes } from "./types";

const StyledImg = styled.img`
  width: 200px;
`;

export const PublisherLogoHeader = ({ logoSrc }: PublisherLogoHeaderTypes) => {
  return (
    <a href="/">
      <StyledImg src={logoSrc} />
    </a>
  );
};
