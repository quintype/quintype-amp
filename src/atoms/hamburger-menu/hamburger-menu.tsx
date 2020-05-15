import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HamburgerMenuTypes } from "./types";
import styled from "styled-components";
import { Close } from "../icons";

export const HamburgerMenu = ({ align, items, textDirection }: HamburgerMenuTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
      </Helmet>
      <amp-sidebar id="sidebar" layout="nodisplay" side={align}>
        <StyledList dir={textDirection}>
          <CloseButton />
          {items.map((item, i) => (
            <StyledListItem key={i}>
              <StyledAnchor href={item.url}>{item.title}</StyledAnchor>
            </StyledListItem>
          ))}
        </StyledList>
      </amp-sidebar>
    </Fragment>
  );
};

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 15px;
  min-width: 220px;
  font: ${(props) => {
    const fontFamily = props.theme.font.family.primary;
    const fontWeight = props.theme.font.weight.bold;
    const fontSize = props.theme.font.size.s;
    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }};
`;
const StyledListItem = styled.li`
  margin: 15px 0;
  color: ${(props) => props.theme.color.secondaryColor};
`;
const StyledCloseIcon = styled.div`
  cursor: pointer;
  width: 1rem;
  margin: 0 10px 0 auto;
`;
export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.secondaryColor};
`;
const CloseButton = () => (
  <StyledListItem>
    <StyledCloseIcon role="button" tabIndex={0} on="tap:sidebar.close">
      <Close />
    </StyledCloseIcon>
  </StyledListItem>
);
