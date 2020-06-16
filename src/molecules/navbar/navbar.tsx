import React, { Fragment } from "react";
import styled from "styled-components";
import { PublisherLogoHeader, icons, HamburgerMenu } from "../../atoms";
import { NavbarTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash.get";
import { withTheme } from "styled-components";

const { Hamburger } = icons;

const StyledNavbar = styled.header`
  width: 100%;
  height: 60px;
  position: relative;
`;
const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export const NavbarBase = ({ logoSrc, align = "left", config, theme }: NavbarTypes) => {
  const isMenuEnabled = get(config, ["ampConfig", "menu", "enabled"], false);
  const hamburgerMenuItems = get(config, ["ampConfig", "menu-groups", "default", "items"], []);
  const textDirection = get(config, ["publisherConfig", "text-direction"], "ltr");
  const logo = logoSrc || get(config, ["ampConfig", "logo-url"], null);
  const publisherName = get(config, ["publisherConfig", "publisher-name"], "");
  const hamburgerColor = get(theme, ["color", "secondaryColor"], "currentColor");
  if (!logo) return null;
  return (
    // find better way to add next-page-hide
    <div next-page-hide="true">
      <StyledNavbar>
        <LogoWrapper>
          <PublisherLogoHeader publisherName={publisherName} logoSrc={logo} />
        </LogoWrapper>
        {isMenuEnabled && hamburgerMenuItems.length > 0 && (
          <Fragment>
            <HamburgerWrapper role="button" tabIndex={0} on="tap:sidebar.open" align={align}>
              <Hamburger width="40" height="40" color={hamburgerColor} />
            </HamburgerWrapper>
            <HamburgerMenu align={align} textDirection={textDirection} items={hamburgerMenuItems} />
          </Fragment>
        )}
      </StyledNavbar>
    </div>
  );
};

export const Navbar = withTheme(withConfig(NavbarBase));
