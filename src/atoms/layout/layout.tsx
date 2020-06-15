import React, { Fragment } from "react";
import { Layout } from "./types";
import { Helmet } from "react-helmet";
import { Theme } from "../../context/theme";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { getTokensFromAMPConfig } from "../../utils/theme";
import styled from "styled-components";

const Container = styled.main.attrs(({ inlineStyles }: ContainerTypes) => ({
  style: inlineStyles
}))<ContainerTypes>`
  font-family: ${(props) => props.theme.font.family.primary};
  position: relative;
`;

export interface ContainerTypes {
  inlineStyles?: object;
}

const Layout = ({ style, children, story, config, inlineStyles }: Layout) => {
  const tokens = getTokensFromAMPConfig(config.ampConfig);
  const embedCustomFonts = config.ampConfig.fonts;
  return (
    <Fragment>
      <Helmet>
        {embedCustomFonts.primary.url && (
          <link href={`https://fonts.googleapis.com/css?family=${embedCustomFonts.primary.url}`} rel="stylesheet" />
        )}
        {embedCustomFonts.secondary.url && (
          <link href={`https://fonts.googleapis.com/css?family=${embedCustomFonts.secondary.url}`} rel="stylesheet" />
        )}
        <style>{style}</style>
      </Helmet>
      <ConfigProvider value={config}>
        <StoryProvider value={story}>
          <Theme tokens={tokens}>
            <Container inlineStyles={inlineStyles}>{children}</Container>
          </Theme>
        </StoryProvider>
      </ConfigProvider>
    </Fragment>
  );
};

export default Layout;
