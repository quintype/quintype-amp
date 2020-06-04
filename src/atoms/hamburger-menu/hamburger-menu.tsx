import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HamburgerMenuTypes } from "./types";
import { CloseButton, TreeNode } from "./container-components";
import { StyledList } from "./presentational-components";
import { arrayToTree } from "performant-array-to-tree";
import styled from "styled-components";

const StyledSidebar = styled("amp-sidebar").attrs(({ inlineStyles }: StyledSidebarTypes) => ({
  style: inlineStyles
}))<StyledSidebarTypes>``;

export interface StyledSidebarTypes {
  inlineStyles?: object;
}

const StyledNestedMenu = styled("amp-nested-menu").attrs(({ inlineStyles }: StyledNestedMenuTypes) => ({
  style: inlineStyles
}))<StyledNestedMenuTypes>``;

export interface StyledNestedMenuTypes {
  inlineStyles?: object;
}
export const HamburgerMenu = ({ align, items, textDirection, inlineStyles }: HamburgerMenuTypes) => {
  const itemsTree: any = arrayToTree(items, {
    dataField: null,
    parentId: "parent-id",
    childrenField: "child-items"
  });
  const sidebarStyles = {
    width: "250px"
  };

  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
      </Helmet>
      <StyledSidebar
        id="sidebar"
        layout="nodisplay"
        side={align}
        on="sidebarClose:nested-menu.reset"
        style={sidebarStyles}
        inlineStyles={inlineStyles}>
        <StyledNestedMenu layout="fill" id="nested-menu">
          <StyledList dir={textDirection}>
            <CloseButton />
            {itemsTree.map((item) => (
              <TreeNode item={item} key={item.id} textDirection={textDirection} />
            ))}
          </StyledList>
        </StyledNestedMenu>
      </StyledSidebar>
    </Fragment>
  );
};
