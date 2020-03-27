import React, { Fragment } from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { FooterTypes } from "./types";
import { genStyles } from "../../helpers/gen-styles";
import { withTheme } from "styled-components";

const baseStyles = css`
  display: flex;
  padding: 8px 4px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  font-family: ${(props) => props.theme.font.family.secondary};
  background-color: ${(props) => props.theme.color.footerBackground};
`;

const PoweredBy = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.footerTextColor};
  font-size: ${(props) => props.theme.font.size.xxs};
`;

const BaseFooter = (props: FooterTypes & { theme?: DefaultTheme }) => {
  const { text, children, style } = props;
  const StyledFooter = styled.footer`
    ${genStyles(baseStyles, style, props)}
  `;

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

export { BaseFooter };

const Footer = withTheme(BaseFooter);
export { Footer };
