import React, { Fragment } from "react";
import { Layout } from "./types";
import { Helmet } from "react-helmet";
import { Theme } from "../../theme/theme";
import styled from "styled-components";

const Container = styled.main`
  background-color: ${(props) => props.theme.color.brand1};
`;

const Layout = ({ style, children }: Layout) => {
  return (
    <Fragment>
      <Helmet>
        <style>{style}</style>
      </Helmet>
      <Theme>
        <Container>{children}</Container>
      </Theme>
    </Fragment>
  );
};

export default Layout;
