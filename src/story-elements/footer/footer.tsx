import React from "react";
import styled from "styled-components";
import {FooterTypes} from "./types"

const StyledFooter = styled.footer``;

const Footer = (props: FooterTypes) => (
  <StyledFooter>
    <div>{props.footerText}</div>
    <div>
      <a
        href="https://www.quintype.com/"
        rel="noreferrer noopener"
        target="_blank"
      >
        Powered by Quintype
      </a>
    </div>
  </StyledFooter>
);

export default Footer;
