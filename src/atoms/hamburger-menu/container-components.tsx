import React from "react";
import { MenuItemComponentTypes, TreeNodeComponentTypes } from "./types";
import { StyledListItem, StyledAnchor, StyledCloseIcon, ListItemWithSubmenu } from "./presentational-components";
// import { Close } from "../icons";

export const TreeNode = ({ item }: TreeNodeComponentTypes) => {
  return item["child-items"] && item["child-items"].length ? (
    <ListItemWithSubmenu>
      <MenuItem item={item} />
      <SubmenuOpen />
      <div amp-nested-submenu="true">
        this is the Submenu
        {item["child-items"].map((childItem) => (
          <TreeNode key={childItem.id} item={childItem} />
        ))}
        <SubmenuClose />
      </div>
    </ListItemWithSubmenu>
  ) : (
    <StyledListItem>
      <MenuItem item={item} />
    </StyledListItem>
  );
};

export const CloseButton = () => (
  <StyledListItem>
    <StyledCloseIcon role="button" tabIndex={0} on="tap:sidebar.close">
      {/* <Close /> */}X
    </StyledCloseIcon>
  </StyledListItem>
);

const SubmenuOpen = () => <StyledListItem amp-nested-submenu-open="true">{" > "}</StyledListItem>;
const SubmenuClose = () => <StyledListItem amp-nested-submenu-close="true">{" < "}</StyledListItem>;

export const MenuItem = ({ item }: MenuItemComponentTypes) =>
  item["item-type"] === "placeholder" ? (
    <StyledListItem>
      <Placeholder item={item} />
    </StyledListItem>
  ) : (
    <StyledListItem>
      <DefaultItem item={item} />
    </StyledListItem>
  );

const Placeholder = ({ item }: MenuItemComponentTypes) => <span>{item.title}</span>;
const DefaultItem = ({ item }: MenuItemComponentTypes) => (
  <StyledAnchor href={item.url || item.data.link}>{item.title}</StyledAnchor>
);
