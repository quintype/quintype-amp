import React from "react";
import { MenuItemLink, MenuItemPlaceholder, MenuItemDefault, MenuItemType } from "./types";
import { StyledListItem, StyledAnchor, StyledCloseIcon, ListItemWithSubmenu } from "./presentational-components";
// import { Close } from "../icons";

export const TreeNode = (item) => {
  const hasChildren = item["child-items"] && item["child-items"].length;
  return hasChildren ? (
    <ListItemWithSubmenu>
      <MenuItem item={item} />
      <SubmenuOpen />
      <div amp-nested-submenu={true}>
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
// if item has children,
// 1. add ">" open submenu link
// 2. add submenu <ul
// 3. inside sumbenu, add "<" to close submenu
// ELSE render normal list item

// <StyledListItem key={item.id}>
//                <MenuItem item={item} />
//              </StyledListItem>

export const CloseButton = () => (
  <StyledListItem>
    <StyledCloseIcon role="button" tabIndex={0} on="tap:sidebar.close">
      {/* <Close /> */}X
    </StyledCloseIcon>
  </StyledListItem>
);

const SubmenuOpen = () => <StyledListItem amp-nested-submenu-open={true}>{" > "}</StyledListItem>;
const SubmenuClose = () => <StyledListItem amp-nested-submenu-close={true}>{" < "}</StyledListItem>;

export const MenuItem = (item: MenuItemType) => {
  let Component;
  switch (item["item-type"]) {
    case "placeholder":
      Component = Placeholder;
    case "link":
      Component = Link;
    default:
      Component = DefaultItem;
  }
  return (
    <span>{item.title}</span>
    // <StyledListItem>
    //   <Component item={item} />
    // </StyledListItem>
  );
};

const Placeholder = (item: MenuItemPlaceholder) => item.title;
const Link = (item: MenuItemLink) => <StyledAnchor href={item.url || item.data.link}>{item.title}</StyledAnchor>;
const DefaultItem = (item: MenuItemDefault) => <StyledAnchor href={item.url}>{item.title}</StyledAnchor>;
