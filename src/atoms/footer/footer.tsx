import React, { Fragment } from "react";
import styled from "styled-components";
import { FooterTypes } from "./types";

const StyledFooter = styled.footer``;

const Footer = ({ text, children }: FooterTypes) => {
  return (
    <StyledFooter>
      {children ? (
        children
      ) : (
        <Fragment>
          <p>{text}</p>
          <a href="https://www.quintype.com/" rel="noreferrer noopener" target="_blank">
            Powered by Quintype
          </a>
        </Fragment>
      )}
    </StyledFooter>
  );
};

export { Footer };
