import React from "react";
import styled from "styled-components";

const StyledLayerGradient = styled.div`
  background-image: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.75));
`;

export const Gradient = () => (
  <amp-story-grid-layer template="fill">
    <StyledLayerGradient />
  </amp-story-grid-layer>
);
