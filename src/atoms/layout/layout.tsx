import React, { Fragment } from "react";
import { Layout } from "./types";
import { Helmet } from "react-helmet";
import { Theme } from "../../context/theme";
import { StoryProvider } from "../../context/storyContext";

import styled from "styled-components";

const Container = styled.main`
  background-color: ${(props) => props.theme.color.brand1};
`;

const Layout = ({ style, children, story }: Layout) => {
  return (
    <Fragment>
      <Helmet>
        <style>{style}</style>
      </Helmet>
      <StoryProvider value={story}>
        <Theme>
          <Container>{children}</Container>
        </Theme>
      </StoryProvider>
    </Fragment>
  );
};

export default Layout;
