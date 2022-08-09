import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HamburgerMenuTypes } from "./types";
import { CloseButton, TreeNode } from "./container-components";
import { StyledList } from "./presentational-components";
import { arrayToTree } from "performant-array-to-tree";
import styled from "styled-components";

const StyledSidebar = styled.div.attrs(({ inlineStyles }: StyledSidebarTypes) => ({
  style: inlineStyles
}))<StyledSidebarTypes>``;

export interface StyledSidebarTypes {
  inlineStyles?: object;
}

const StyledNestedMenu = styled.div.attrs(({ inlineStyles }: StyledNestedMenuTypes) => ({
  style: inlineStyles
}))<StyledNestedMenuTypes>``;

export interface StyledNestedMenuTypes {
  inlineStyles?: object;
}
export const HamburgerMenu = ({ items, inlineStyles }: HamburgerMenuTypes) => {
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
        <script async={undefined} custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-1.0.js" />
      </Helmet>
      <StyledSidebar inlineStyles={inlineStyles}>
        <amp-sidebar id="sidebar" layout="nodisplay" on="sidebarClose:nested-menu.reset" style={sidebarStyles}>
          <StyledNestedMenu inlineStyles={inlineStyles}>
            <amp-nested-menu layout="fill" id="nested-menu">
              <StyledList>
                <CloseButton />
                {itemsTree.map((item) => (
                  <TreeNode item={item} key={item.id} />
                ))}
              </StyledList>
            </amp-nested-menu>
          </StyledNestedMenu>
        </amp-sidebar>
      </StyledSidebar>
    </Fragment>
  );
};
