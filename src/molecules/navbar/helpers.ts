import { Config, MenuGroupItemsTypes } from "../../types/config";
import get from "lodash.get";

/**
 * returns hamburger menu items for subdomains
 *
 * which menuGroup to pick for which domain can be configured by setting featureConfig.sidebarMenu.menuGroupSlug for the subdomain
 * if featureConfig isn't passed, check if menuGroup with slug "amp-sidebar-menu-${domainSlug}" is present and return those items
 * if that's not set, check if menuGroup with slug "sidebar-menu-${domainSlug}" is present and return those items
 * if that's not set either, return default menu group items
 *
 * @category Helpers
 * @param {Object} config object
 * @returns {Array} Menu Group Items that should be shown inside the hamburger menu
 */

export const getDomainSpecificHamburgerMenuItems = (config: Config) => {
  const { ampConfig } = config;
  if (!ampConfig["menu-groups"]) return [];

  const domainSlug = config.opts?.domainSlug;
  const defaultMenuGroupItems = get(config, ["ampConfig", "menu-groups", "default", "items"], []);
  const allMenuGroupsArr: MenuGroupItemsTypes[] = Object.values(ampConfig["menu-groups"]);

  if (allMenuGroupsArr.length) {
    const sidebarMenuGroupSlug = getSidebarMenuSlug(allMenuGroupsArr, config, domainSlug);
    if (sidebarMenuGroupSlug) {
      const menuGroupToReturn = allMenuGroupsArr.find((menuGroup) => menuGroup.slug === sidebarMenuGroupSlug);
      if (menuGroupToReturn && menuGroupToReturn.items.length) return menuGroupToReturn.items;
    }
  }
  return defaultMenuGroupItems;
};

const getSidebarMenuSlug = (arr, config, domainSlug) => {
  // returns slug of the menu group to take
  // returns menuGroupSlug from featureConfig OR "amp-sidebar-menu-<domainSlug>" OR "sidebar-menu-<domainSlug>" OR null in this order
  const slug = domainSlug ? `-${domainSlug}` : "";
  const menuGroupSlugFromFeatureConfig = get(config, ["opts", "featureConfig", "sidebarMenu", "menuGroupSlug"], null);
  const ampSidebarMenuPresent = arr.find((item) => item.slug === `amp-sidebar-menu${slug}`);
  const sidebarMenuPresent = arr.find((item) => item.slug === `sidebar-menu${slug}`);

  if (menuGroupSlugFromFeatureConfig) return menuGroupSlugFromFeatureConfig;
  else if (ampSidebarMenuPresent) return `amp-sidebar-menu${slug}`;
  else if (sidebarMenuPresent) return `sidebar-menu${slug}`;
  else return null;
};
