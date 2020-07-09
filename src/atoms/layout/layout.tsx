import React, { Fragment } from "react";
import { Layout as LayoutTypes } from "./types";
import { Helmet } from "react-helmet";
import { Theme } from "../../context/theme";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { getTokensFromAMPConfig } from "../../utils/theme";
import styled from "styled-components";

const Container = styled.div`
  font-family: ${(props) => props.theme.font.family.primary};
  position: relative;
`;

const Layout = ({ style, children, story, config }: LayoutTypes) => {
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
            <Container>{children}</Container>
          </Theme>
        </StoryProvider>
      </ConfigProvider>
    </Fragment>
  );
};

export default Layout;
