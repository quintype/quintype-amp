import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledLink = styled.link.attrs(({ style }: StyledLinkTypes & { style?: object }) => ({
  style
}))<StyledLinkTypes>``;

export interface StyledLinkTypes {
  inlineStyles?: object;
}
export const Link = ({ inlineStyles, ...props }: StyledLinkTypes) => (
  <Fragment>
    <Helmet>
      <StyledLink {...props} style={inlineStyles} />
    </Helmet>
  </Fragment>
);
