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
      <ConfigProvider value={config}>
        <StoryProvider value={story}>
          <Theme>
            <Container>{children}</Container>
          </Theme>
        </StoryProvider>
      </ConfigProvider>
    </Fragment>
  );
};

export default Layout;
