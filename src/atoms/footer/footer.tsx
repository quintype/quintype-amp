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
  color: ${(props) => props.theme.color.footerTextColor};
`;

const PoweredBy = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.footerTextColor};
  font-size: ${(props) => props.theme.font.size.xxs};
`;

const StyledFooter = styled("footer")<FooterTypes>`
  ${(props) => genStyles(baseStyles, props.style, props)}
`;

const BaseFooter = (props: FooterTypes & { theme?: DefaultTheme }) => {
  const { text, children, style } = props;

  return (
    <div next-page-hide="true" footer="true">
      <StyledFooter style={style}>
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
    </div>
  );
};

export { BaseFooter };

const Footer = withTheme(BaseFooter);
export { Footer };
