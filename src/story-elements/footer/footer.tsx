import React from "react";
import styled from "styled-components";
import { FooterTypes } from "./types";

const StyledFooter = styled.footer``;

const Footer = ({ footerText }: FooterTypes) => {
  return (
    <StyledFooter>
      <div>{footerText}</div>
      <a href="https://www.quintype.com/" rel="noreferrer noopener" target="_blank">
        Powered by Quintype
      </a>
    </StyledFooter>
  );
};

export default Footer;
