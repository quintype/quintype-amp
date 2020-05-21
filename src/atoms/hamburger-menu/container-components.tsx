import React from "react";
import { MenuItemComponentTypes, TreeNodeComponentTypes, SubMenuTypes } from "./types";
import { StyledListItem, StyledAnchor, StyledCloseIcon, StyledList, SubmenuWrapper } from "./presentational-components";
// import { Close } from "../icons";

export const TreeNode = ({ item }: TreeNodeComponentTypes) => {
  return item["child-items"] && item["child-items"].length ? (
    <SubmenuWrapper data-message="This should wrap submenu">
      <MenuItem item={item} />
      <SubmenuOpen />
      <SubMenu childItems={item["child-items"]} />
    </SubmenuWrapper>
  ) : (
    <StyledListItem>
      <MenuItem item={item} />
    </StyledListItem>
  );
};

export const CloseButton = () => (
  <StyledListItem>
    <StyledCloseIcon role="button" tabIndex={0} on="tap:sidebar.close">
      X
    </StyledCloseIcon>
  </StyledListItem>
);

const SubmenuOpen = () => <span amp-nested-submenu-open="true">{" > "}</span>;
const SubmenuClose = () => <span amp-nested-submenu-close="true">{" < "}</span>;

export const MenuItem = ({ item }: MenuItemComponentTypes) =>
  item["item-type"] === "placeholder" ? <Placeholder item={item} /> : <DefaultItem item={item} />;

const Placeholder = ({ item }: MenuItemComponentTypes) => <span>{item.title}</span>;
const DefaultItem = ({ item }: MenuItemComponentTypes) => (
  <StyledAnchor href={item.url || item.data.link}>{item.title}</StyledAnchor>
);

const SubMenu = ({ childItems }: SubMenuTypes) => (
  <div amp-nested-submenu="true">
    <StyledList>
      {childItems.map((childItem) => (
        <TreeNode key={childItem.id} item={childItem} />
      ))}
      <SubmenuClose />
    </StyledList>
  </div>
);
