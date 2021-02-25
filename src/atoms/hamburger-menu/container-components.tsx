import React from "react";
import { MenuItemComponentTypes, TreeNodeComponentTypes } from "./types";
import { StyledListItem, StyledAnchor, StyledCloseIcon, SubmenuWrapper } from "./presentational-components";

export const TreeNode = ({ item }: TreeNodeComponentTypes) => {
  return item["child-items"] && item["child-items"].length ? (
    <SubmenuWrapper>
      <MenuItem item={item} />
    </SubmenuWrapper>
  ) : (
    <StyledListItem>
      <MenuItem item={item} />
    </StyledListItem>
  );
};

export const CloseButton = () => (
  <StyledListItem>
    <StyledCloseIcon role="button" tabIndex={0} on="tap:sidebar.close" aria-label="close">
      X
    </StyledCloseIcon>
  </StyledListItem>
);

export const MenuItem = ({ item }: MenuItemComponentTypes) =>
  item["item-type"] === "placeholder" ? <Placeholder item={item} /> : <DefaultItem item={item} />;

export const Placeholder = ({ item }: MenuItemComponentTypes) => <span>{item.title}</span>;
export const DefaultItem = ({ item }: MenuItemComponentTypes) => (
  <StyledAnchor href={item.url || item.data.link}>{item.title}</StyledAnchor>
);
