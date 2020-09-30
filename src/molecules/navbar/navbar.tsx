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
export const HamburgerWrapper = styled.div<{ align: "left" | "right" }>`
  position: absolute;
  top: 50%;
  cursor: pointer;
  ${(props) =>
    props.align === "left"
      ? `
    transform: translate(15px, -50%);
  `
      : `
    right: 0;
    transform: translate(-15px, -50%);
  `}
`;

export const NavbarBase = ({ align = "left", config, theme }: NavbarTypes) => {
  const isMenuEnabled = get(config, ["ampConfig", "menu", "enabled"], false);
  const hamburgerMenuItems = getDomainSpecificHamburgerMenuItems(config);
  const textDirection = get(config, ["publisherConfig", "text-direction"], "ltr");
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
          <HamburgerMenu align={align} textDirection={textDirection} items={hamburgerMenuItems} />
        </Fragment>
      )}
    </StyledNavbar>
  );
};

/**
 * Navbar Component uses the PublisherLogoHeader, HamburgerMenu and Hamburger atomic components internally.
 *
 * ```js
 * <Navbar align="right" />
 * ```
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {String} props.align Optional. A string of "right" or "left" which specifies the direction of the hamburger menu.
 * @param {Object} props.config config object
 * @param {Object} props.theme theme object
 *  @category Molecules
 * @component
 */

export const Navbar = withTheme(withConfig(NavbarBase));
