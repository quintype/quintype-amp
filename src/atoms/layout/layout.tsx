import React, { Fragment } from "react";
import { Layout } from "./types";
import { Helmet } from "react-helmet";
import { Theme } from "../../context/theme";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { getTokensFromAMPConfig } from "../../utils/theme";

import styled from "styled-components";

const Container = styled.main`
  font-family: ${(props) => props.theme.font.family.primary};
`;

const Layout = ({ style, children, story, config }: Layout) => {
  const tokens = getTokensFromAMPConfig(config.ampConfig);
  return (
    <Fragment>
      <Helmet>
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
