import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HamburgerMenuTypes } from "./types";
import { CloseButton, TreeNode } from "./container-components";
import { StyledList } from "./presentational-components";
import { FlatToTree } from "../../utils/flatToTree";

export const HamburgerMenu = ({ align, items, textDirection }: HamburgerMenuTypes) => {
  const itemsTree = new FlatToTree(items).getTree();
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
      </Helmet>
      <amp-sidebar id="sidebar" layout="nodisplay" side={align}>
        <amp-nested-menu layout="fill">
          <StyledList dir={textDirection}>
            <CloseButton />
            {itemsTree.map((item) => (
              <TreeNode item={item} key={item.id} />
            ))}
          </StyledList>
        </amp-nested-menu>
      </amp-sidebar>
    </Fragment>
  );
};
