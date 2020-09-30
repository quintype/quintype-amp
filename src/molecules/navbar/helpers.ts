import { Config, MenuGroupItemsTypes, PublisherConfig, MenuItemTypes } from "../../types/config";
import get from "lodash.get";

// returns hamburger menu items for subdomains
// Will return "default" menu group items for main domain or if no menugroups are configured for subdomain
export const getDomainSpecificHamburgerMenuItems = (config: Config) => {
  const { ampConfig, publisherConfig } = config;
  if (!ampConfig["menu-groups"]) return [];
  const domainSlug = config.opts?.domainSlug;

  const defaultMenuGroupItems = get(config, ["ampConfig", "menu-groups", "default", "items"], []);
  if (!domainSlug) return defaultMenuGroupItems;

  const menuGroupsToTake: number[] = getMenuGroupIds(domainSlug, publisherConfig);
  if (!menuGroupsToTake.length) return defaultMenuGroupItems;

  const menuGroupsArr: MenuGroupItemsTypes[] = objToArr(ampConfig["menu-groups"]);
  const arr = menuGroupsToTake
    .map((id) => {
      return menuGroupsArr.find((menuGroup) => menuGroup.id === id);
    })
    .filter((item) => item)
    .reduce((acc, menuGroup) => {
      if (menuGroup && menuGroup.items && menuGroup.items.length) acc = [...acc, ...menuGroup.items];
      return acc;
    }, [] as MenuItemTypes[]);

  return arr.length ? arr : defaultMenuGroupItems;
};

const getMenuGroupIds = (domainSlug, publisherConfig: PublisherConfig) => {
  const domainInfo = publisherConfig.domains.find((domain) => domain.slug === domainSlug);
  return domainInfo ? domainInfo["menu-groups"] : [];
};

// "menu-groups" in api/v1/amp/config should've been an array but it's an obj. Therefore doing this hack
export const objToArr = (obj: object) => {
  const keysArr = Object.keys(obj);
  const arr: MenuGroupItemsTypes[] = [];
  keysArr.forEach((key) => obj[key] && arr.push(obj[key]));
  return arr;
};
