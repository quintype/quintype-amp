import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HamburgerMenuTypes } from "./types";
import { StyledList, StyledListItem, StyledAnchor, CloseButton } from "./components";

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
