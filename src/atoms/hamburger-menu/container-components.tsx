import React from "react";
import { MenuItemComponentTypes, TreeNodeComponentTypes, SubMenuTypes } from "./types";
import { StyledListItem, StyledAnchor, StyledCloseIcon, StyledList, SubmenuWrapper } from "./presentational-components";

export const TreeNode = ({ item, textDirection }: TreeNodeComponentTypes) => {
  return item["child-items"] && item["child-items"].length ? (
    <SubmenuWrapper>
      <MenuItem item={item} />
      <SubmenuOpen />
      <SubMenu childItems={item["child-items"]} textDirection={textDirection} />
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

const SubmenuOpen = () => <span amp-nested-submenu-open="true">{" 〉"}</span>;
const SubmenuClose = () => <span amp-nested-submenu-close="true">{"〈 "}</span>;

export const MenuItem = ({ item }: MenuItemComponentTypes) =>
  item["item-type"] === "placeholder" ? <Placeholder item={item} /> : <DefaultItem item={item} />;

export const Placeholder = ({ item }: MenuItemComponentTypes) => <span>{item.title}</span>;
export const DefaultItem = ({ item }: MenuItemComponentTypes) => (
  <StyledAnchor href={item.url || item.data.link}>{item.title}</StyledAnchor>
);

const SubMenu = ({ childItems, textDirection }: SubMenuTypes) => (
  <div amp-nested-submenu="true">
    <StyledList dir={textDirection}>
      {childItems.map((childItem) => (
        <TreeNode key={childItem.id} item={childItem} textDirection={textDirection} />
      ))}
      <SubmenuClose />
    </StyledList>
  </div>
);
