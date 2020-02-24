import React, { Fragment } from "react";
import { Layout } from "./types";
import { Helmet } from "react-helmet";
import { Theme } from "../../context/theme";
import { StoryProvider } from "../../context/storyContext";
import { ConfigProvider } from "../../context/config-context";

import styled from "styled-components";

const Container = styled.main`
  background-color: ${(props) => props.theme.color.brand1};
`;

const Layout = ({ style, children, story, config }: Layout) => {
  return (
    <Fragment>
      <Helmet>
        <style>{style}</style>
      </Helmet>
      <StoryProvider value={story}>
        <Theme>
          <ConfigProvider value={config}>
            <Container>{children}</Container>
          </ConfigProvider>
        </Theme>
      </StoryProvider>
    </Fragment>
  );
};

export default Layout;
