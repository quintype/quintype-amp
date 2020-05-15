import { MenuItemTypes } from "../../types/config";

export const createTree = (items) => {
  const output: MenuItemTypes[] = [];
  const idsArr: number[] = []; // stores ids of items that are added to output obj
  items.forEach((item) => {
    if (item["parent-id"] === null) {
      output.push(item);
      idsArr.push(item.id);
    }
  });
};

// const k = {
//   "tag-name": null,
//   "entity-properties": null,
//   "collection-id": null,
//   "entity-slug": null,
//   "item-id": null,
//   rank: 7337,
//   title: "Home",
//   "item-type": "link",
//   "section-slug": null,
//   "tag-slug": null,
//   id: 7342,
//   "parent-id": null,
//   url: "https://barandbench.com",
//   "entity-name": null,
//   "collection-slug": null,
//   "section-name": null,
//   data: {
//     color: "#FFFFFF",
//     link: "https://barandbench.com"
//   }
// };

// export const HamburgerMenu2 = ({ align, items, textDirection }: HamburgerMenuTypes) => {
//   return (
//     <Fragment>
//       <Helmet>
//         <script async={undefined} custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
//         <script
//           async={undefined}
//           custom-element="amp-nested-menu"
//           src="https://cdn.ampproject.org/v0/amp-nested-menu-0.1.js"
//         />
//       </Helmet>
//       <amp-sidebar id="sidebar" layout="nodisplay" side={align}>
//         <amp-nested-menu layout="fill">
//           <StyledList dir={textDirection}>
//             <CloseButton />
//             {getChildItems(items, null).map((item) => {
//               const childItems = getChildItems(items, item.id);
//               return childItems.length > 0 ? (
//                 <ListItemWithIcon key={item.id}>
//                   <StyledAnchor href={item.url}>{item.title}</StyledAnchor>
//                   <span amp-nested-submenu-open={true}>></span>
//                   <div amp-nested-submenu={true}>
//                     <StyledList>
//                       <ListItem></ListItem>
//                     </StyledList>
//                   </div>
//                 </ListItemWithIcon>
//               ) : (
//                 <ListItem key={item.id}>
//                   <StyledAnchor href={item.url}>{item.title}</StyledAnchor>
//                 </ListItem>
//               );
//             })}
//           </StyledList>
//         </amp-nested-menu>
//       </amp-sidebar>
//     </Fragment>
//   );
// };

// const ListItemWithIcon = styled.li`
//   margin: 15px 0;
//   color: ${(props) => props.theme.color.secondaryColor};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const getChildItems = (items, parentId) => items.filter((item) => item["parent-id"] === parentId);
