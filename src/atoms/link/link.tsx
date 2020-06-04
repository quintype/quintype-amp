import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledLink = styled.link.attrs(({ inlineStyles }: StyledLinkTypes) => ({
  style: inlineStyles
}))<StyledLinkTypes>``;

export interface StyledLinkTypes {
  inlineStyles?: object;
}
export const Link = (props, { inlineStyles }: StyledLinkTypes) => (
  <Fragment>
    <Helmet>
      <StyledLink {...props} inlineStyles={inlineStyles} />
    </Helmet>
  </Fragment>
);
