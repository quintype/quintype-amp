import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HamburgerMenuTypes } from "./types";
import styled, { css, withTheme } from "styled-components";
import { genStyles } from "../../helpers/gen-styles";
import get from "lodash.get";

const styledListBase = css`
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

const StyledListItemBase = css`
  margin: 15px 0;
  color: ${(props) => props.theme.color.secondaryColor};
`;

export const StyledAnchorBase = css`
  text-decoration: none;
  color: ${(props) => props.theme.color.secondaryColor};
`;
const HamburgerMenuBase = ({ align, children, items, textDirection, style, theme }: HamburgerMenuTypes) => {
  const listStyle = get(style, "list", null);
  const listItemStyle = get(style, "listItem", null);
  const listItemAnchorStyle = get(style, "listItemAnchor", null);
  const StyledList = styled.ul`
    ${genStyles(styledListBase, listStyle, theme)}
  `;
  const StyledListItem = styled.li`
    ${genStyles(StyledListItemBase, listItemStyle, theme)}
  `;
  const StyledAnchor = styled.a`
    ${genStyles(StyledAnchorBase, listItemAnchorStyle, theme)}
  `;
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
      </Helmet>
      <amp-sidebar id="sidebar" layout="nodisplay" side={align}>
        <StyledList dir={textDirection}>
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

export const HamburgerMenu = withTheme(HamburgerMenuBase);
