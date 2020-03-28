import React, { Fragment } from "react";
import styled from "styled-components";
import { PublisherLogoHeader, icons, HamburgerMenu } from "../../atoms";
import { NavbarTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash.get";

const { HamburgerLogo, Close } = icons;

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
const StyledCloseIcon = styled.div`
  cursor: pointer;
  width: 1rem;
  margin: 0 10px 0 auto;
`;
const StyledListItem = styled.li`
  padding: 20px 0 0;
`;
const HamburgerLogoWrapper = styled.div<{ isLeft: boolean }>`
  position: absolute;
  top: 50%;
  cursor: pointer;
  ${(props) =>
    props.isLeft
      ? `
    transform: translate(15px, -50%);
  `
      : `
    right: 0;
    transform: translate(-15px, -50%);
  `}
`;

export const NavbarBase = ({ logoSrc = "", align = "left", config }: NavbarTypes) => {
  const isLeft = align === "left";
  const isMenuEnabled = get(config, ["ampConfig", "menu", "enabled"], false);
  const hamburgerMenuItems = get(config, ["ampConfig", "menu", "items"], []);
  const textDirection = get(config, ["ampConfig", "text_direction"], "ltr");
  const logo = logoSrc || get(config, ["ampConfig", "logo-url"], "");
  return (
    <StyledNavbar>
      <LogoWrapper>
        <PublisherLogoHeader logoSrc={logo} />
      </LogoWrapper>
      {isMenuEnabled && (
        <Fragment>
          <HamburgerLogoWrapper role="button" tabIndex={0} on="tap:sidebar.open" isLeft={isLeft}>
            <HamburgerLogo width="40" height="40" />
          </HamburgerLogoWrapper>
          <HamburgerMenu align={align} textDirection={textDirection} items={hamburgerMenuItems}>
            <StyledListItem>
              <StyledCloseIcon role="button" tabIndex={0} on="tap:sidebar.close">
                <Close />
              </StyledCloseIcon>
            </StyledListItem>
          </HamburgerMenu>
        </Fragment>
      )}
    </StyledNavbar>
  );
};

export const Navbar = withConfig(NavbarBase);
