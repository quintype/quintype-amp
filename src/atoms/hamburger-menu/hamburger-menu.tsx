import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HamburgerMenuTypes } from "./types";
import styled from "styled-components";

const StyledList = styled.ul<{ isLeft: boolean }>`
  list-style: none;
  margin: 0;
  padding: ${(props) => (props.isLeft ? "0 10px 0 20px" : "0 20px 0 10px")};
  min-width: 220px;
  font: ${(props) => {
    const fontFamily = props.theme.font.family.primary;
    const fontWeight = props.theme.font.weight.bold;
    const fontSize = props.theme.font.size.s;
    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }};
`;

const StyledListItem = styled.li`
  line-height: 54px;
  color: ${(props) => props.theme.color.secondaryColor};
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.secondaryColor};
`;

export const HamburgerMenu = ({ align, children, items }: HamburgerMenuTypes) => {
  const isLeft = align === "left";
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
      </Helmet>
      <amp-sidebar id="sidebar" layout="nodisplay" side={align}>
        <StyledList isLeft={isLeft}>
          {children}
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
