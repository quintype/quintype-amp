import { Config, MenuGroupItemsTypes } from "../../types/config";
import get from "lodash.get";

/**
 * returns hamburger menu items for subdomains
 * Will return "default" menu group items for main domain or if no menugroups are configured for subdomain
 *
 * which menuGroup to pick for which domain can be configured by setting featureConfig.sidebarMenu.menuGroupSlug for the subdomain
 * if featureConfig isn't passed, check if menuGroup with slug "amp-sidebar-menu-${domainSlug}" is present and return those items
 * if that's not set, check if menuGroup with slug "sidebar-menu-${domainSlug}" is present and return those items
 * if that's not set either, return default menu group items
 * return default menu group items in case there are no items in any of the above menuGroups
 *
 * @param {Object} config config object
 * @returns {Array} Menu Group Items that should be shown inside the hamburger menu
 */

export const getDomainSpecificHamburgerMenuItems = (config: Config) => {
  const { ampConfig } = config;
  if (!ampConfig["menu-groups"]) return [];
  const domainSlug = config.opts?.domainSlug;

  const defaultMenuGroupItems = get(config, ["ampConfig", "menu-groups", "default", "items"], []);
  if (!domainSlug) return defaultMenuGroupItems;

  const allMenuGroupsArr: MenuGroupItemsTypes[] = objToArr(ampConfig["menu-groups"]);

  if (allMenuGroupsArr.length) {
    const sidebarMenuGroupSlug = getSidebarMenuSlug(allMenuGroupsArr, config, domainSlug);
    if (sidebarMenuGroupSlug) {
      const menuGroupToReturn = allMenuGroupsArr.find((menuGroup) => menuGroup?.slug === sidebarMenuGroupSlug);
      if (menuGroupToReturn && menuGroupToReturn.items.length) return menuGroupToReturn.items;
    }
  }
  return defaultMenuGroupItems;
};

// "menu-groups" in api/v1/amp/config should've been an array but it's an obj. Therefore doing this hack
export const objToArr = (obj: object) => {
  const keysArr = Object.keys(obj);
  const arr: MenuGroupItemsTypes[] = [];
  keysArr.forEach((key) => obj[key] && arr.push(obj[key]));
  return arr;
};

const getSidebarMenuSlug = (arr, config, domainSlug) => {
  // returns slug of the menu group to take
  // returns menuGroupSlug from featureConfig OR "amp-sidebar-menu-<domainSlug>" OR "sidebar-menu-<domainSlug>" OR null in this order

  const menuGroupSlugFromFeatureConfig = get(config, ["opts", "featureConfig", "sidebarMenu", "menuGroupSlug"], null);
  const ampSidebarMenuPresent = arr.find((item) => item.slug === `amp-sidebar-menu-${domainSlug}`);
  const sidebarMenuPresent = arr.find((item) => item.slug === `sidebar-menu-${domainSlug}`);

  if (menuGroupSlugFromFeatureConfig) return menuGroupSlugFromFeatureConfig;
  else if (ampSidebarMenuPresent) return `amp-sidebar-menu-${domainSlug}`;
  else if (sidebarMenuPresent) return `sidebar-menu-${domainSlug}`;
  else return null;
};
