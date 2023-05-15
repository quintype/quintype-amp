import React, { Fragment } from "react";
import styled, { CSSObject, css } from "styled-components";
import get from "lodash.get";
import { FooterTypes } from "./types";
import { genStyles } from "../../helpers/gen-styles";
import { withTheme } from "styled-components";
import { withConfig } from "../../context";

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

export const PoweredBy = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.footerTextColor};
  font-size: ${(props) => props.theme.font.size.xxs};
`;

const StyledFooter = styled("footer")<FooterTypes>`
  ${(props) => genStyles(baseStyles, props.style, props)}
`;

export const DefaultFooter = ({ text, children, style, config }: FooterTypes) => {
  let showPoweredByQt: boolean | ((config) => boolean) = get(
    config,
    ["opts", "featureConfig", "showPoweredByQt"],
    true
  );

  showPoweredByQt = typeof showPoweredByQt === "function" ? showPoweredByQt(config) : showPoweredByQt;
  return (
    <StyledFooter style={style}>
      {children ? (
        children
      ) : (
        <Fragment>
          {text && <p>{text}</p>}
          {showPoweredByQt && (
            <PoweredBy href="https://www.quintype.com/" rel="noreferrer noopener" target="_blank">
              Powered by Quintype
            </PoweredBy>
          )}
        </Fragment>
      )}
    </StyledFooter>
  );
};

const BaseFooter = ({ text, children, style, config, story, collection }: FooterTypes) => {
  const footerRender = get(config, ["opts", "render", "footerRender"], null);

  return footerRender ? (
    footerRender({ text, children, style, config, story, collection })
  ) : (
    <DefaultFooter text={text} children={children} style={style} config={config} />
  );
};

export { BaseFooter };

/**
 *
 * Footer component is the footer which comes at the bottom of the page.
 * The look of the Footer can be changed using the render prop footerRender. In case footerRender is passed in the config,
 * it is rendered. Otherwise a default Footer is rendered
 *
 * ```javascript
 * import React from "react";
 * import { AMP } from "@quintype/amp";
 * import { Layout, Head } = AMP;
 * const MyCustomFooter = ({ story, config }) => (
 * <Layout story={story} config={config}>
 *    <Head>
 *      <style>{`
 *        .footerWrapper {
 *         display: flex;
 *         align-items: center;
 *       }
 *     `}</style
 *    </Head>
 *    <p className="footerWrapper">This is my new footer</p>
 *  </Layout>
 * )
 *
 * ...
 * ampRoutes(app, {
 *    footerRender: ({ story, config }) => <MyCustomFooter story={story} config={config} />
 * })
 * ...
 * ```
 *
 * @category Atoms
 * @module Footer
 * @component
 * @param {FooterTypes} props
 * @param {CSSObject} props.style Optional. Used to pass custom styles
 * @param {string} props.text Optional. Used to add custom text.
 * @param {(JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild)} props.children Optional. If children is passed, children are shown orelse the default powered by text is shown
 */

const Footer = withConfig(withTheme(BaseFooter));
export { Footer };
