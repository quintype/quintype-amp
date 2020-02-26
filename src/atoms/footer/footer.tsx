import React, { Fragment } from "react";
import styled from "styled-components";
import { FooterTypes } from "./types";

const StyledFooter = styled.footer`
  display: flex;
  padding: 8px 4px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  font-family: ${(props) => props.theme.font.family.secondary};
  background-color: ${(props) => props.theme.color.primaryColor};
`;

const PoweredBy = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.footerTextColor};
  font-size: ${(props) => props.theme.font.size.xxs};
`;
const Footer = ({ text, children }: FooterTypes) => {
  return (
    <StyledFooter>
      {children ? (
        children
      ) : (
        <Fragment>
          {text && <p>{text}</p>}
          <PoweredBy href="https://www.quintype.com/" rel="noreferrer noopener" target="_blank">
            Powered by Quintype
          </PoweredBy>
        </Fragment>
      )}
    </StyledFooter>
  );
};

export { Footer };
