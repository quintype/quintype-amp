import React from "react";
import styled from "styled-components";
import { PublisherLogoHeader, icons, HamburgerMenu } from "../../atoms";
import { NavbarTypes } from "./types";
import { withConfig } from "../../context";
import get from "lodash.get";

const { HamburgerLogo, Close } = icons; // these are temporary, final icons will be given by design team later

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
  const hamburgerMenuItems = get(config, ["theme", "menu", "items"], []);
  const textDirection = get(config, ["theme", "text_direction"], "ltr");
  const logo = logoSrc || get(config, ["theme", "logo-url"], "");
  return (
    <StyledNavbar>
      <LogoWrapper>
        <PublisherLogoHeader logoSrc={logo} />
      </LogoWrapper>
      <HamburgerLogoWrapper on="tap:sidebar" isLeft={isLeft}>
        <HamburgerLogo />
      </HamburgerLogoWrapper>
      <HamburgerMenu align={align} textDirection={textDirection} items={hamburgerMenuItems}>
        <StyledListItem>
          <StyledCloseIcon on="tap:sidebar.close">
            <Close />
          </StyledCloseIcon>
        </StyledListItem>
      </HamburgerMenu>
    </StyledNavbar>
  );
};

export const Navbar = withConfig(NavbarBase);
