import React, { Fragment } from "react";
import styled from "styled-components";
import { PublisherLogoHeader, HamburgerMenu } from "../../atoms";
import { Hamburger } from "../../atoms/icons/hamburger";
import { NavbarTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash.get";
import { withTheme } from "styled-components";
import { getDomainSpecificHamburgerMenuItems } from "./helpers";

const StyledNavbar = styled.header`
  width: 100%;
  height: 60px;
  position: relative;
  background-color: ${(props) => props.theme.color.headerBackground};
`;
const LogoWrapperOuter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LogoWrapperInner = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
`;
export const HamburgerWrapper = styled.div<{ align: "ltr" | "rtl" }>`
  position: absolute;
  top: 50%;
  cursor: pointer;
  ${(props) =>
    props.align === "ltr"
      ? `
    transform: translate(15px, -50%);
  `
      : `
    right: 0;
    transform: translate(-15px, -50%);
  `}
`;

export const DefaultNavbar = ({ config, theme }: NavbarTypes) => {
  const isMenuEnabled = get(config, ["ampConfig", "menu", "enabled"], false);
  const hamburgerMenuItems = getDomainSpecificHamburgerMenuItems(config);
  const align = get(config, ["publisherConfig", "language", "direction"], "ltr");
  const hamburgerColor = get(theme, ["color", "secondaryColor"], "currentColor");
  return (
    <StyledNavbar>
      <LogoWrapperOuter>
        <LogoWrapperInner>
          <PublisherLogoHeader />
        </LogoWrapperInner>
      </LogoWrapperOuter>
      {isMenuEnabled && hamburgerMenuItems.length > 0 && (
        <Fragment>
          <HamburgerWrapper role="button" tabIndex={0} on="tap:sidebar.open" align={align} aria-label="hamburger">
            <Hamburger width="40" height="40" color={hamburgerColor} />
          </HamburgerWrapper>
          <HamburgerMenu items={hamburgerMenuItems} />
        </Fragment>
      )}
    </StyledNavbar>
  );
};

export const NavbarBase = ({ config, theme }: NavbarTypes) => {
  const customNavbar = get(config, ["opts", "render", "navbarRender"], null);
  return customNavbar ? (
    customNavbar({ config, theme })
  ) : (
    <DefaultNavbar config={config} theme={theme} />
  );
};

/**
 * 
 * Navbar Component by default uses the PublisherLogoHeader, HamburgerMenu and Hamburger atomic components internally.
 * We can also render the customized navbar by passing the render prop navbarRender from the frontend inside app > server > app.js file under ampRoutes as shown below:
 *
 * ```javascript
 * import React from "react";
 * import { AMP } from "@quintype/amp";
 * import { Layout, Head } = AMP;
 * const CustomNavbar = ({ config, theme }) => (
 * <Layout config={config} theme={theme} >
 *   <Head>
  *    <style>{`
  *    .customNavbar {
  *       width: 100%;
  *       height: 60px;
  *       position: relative;
  *       background-color: ${(props) => props.theme.color.headerBackground};
  *     }
  *   `}</style>
 *   </Head>
 *   <h1 className="customNavbar"> CUSTOM NAVBAR </h1>
 * </Layout>
 * )
 * ...
 * ...
 * ampRoutes(app, {
 *    navbarRender: ({ config, theme }) => <CustomNavbar config={config} theme={theme} />
 * })
 * ...
 * 
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {String} props.align Optional. A string of "right" or "left" which specifies the direction of the hamburger menu.
 * @param {Object} props.config config object
 * @param {Object} props.theme theme object
 *  @category Molecules
 * @component
 */

export const Navbar = withTheme(withConfig(NavbarBase));
