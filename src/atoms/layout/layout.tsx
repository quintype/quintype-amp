import React, { Fragment } from "react";
import { Layout as LayoutTypes } from "./types";
import { Theme } from "../../context/theme";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { getTokensFromAMPConfig } from "../../utils/theme";
import styled from "styled-components";

const Container = styled.div`
  font-family: ${(props) => props.theme.font.family.primary};
  position: relative;
`;

/**
 *
 * Layout component is a wrapper and provider of story, config and theme context. Therefore, most library components that consome context need to be wrapped with layout
 *
 * ```js
 * <Layout story={textStory} config={config}>
 *  <Navbar />
 *  <div>
 *    <TopAd />
 *    <Spacer token="s" />
 *    <HeaderCard />
 *  </div>
 * </Layout>
 * ```
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Story} params.story story object
 * @param {Config} params.config config object
 * @param {Object} params.children child components
 *
 * @category Atoms
 * @component
 *
 */

export const Layout = ({ children, story, config }: LayoutTypes) => {
  const tokens = getTokensFromAMPConfig(config.ampConfig);
  return (
    <Fragment>
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
