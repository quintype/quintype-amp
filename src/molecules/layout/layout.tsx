import React, { Fragment } from "react";
import { Layout } from "./types";
import { AppContext } from "../../helper-functions";
import { Helmet } from "react-helmet";

const Layout = (props: Layout) => (
  <Fragment>
    <Helmet>
      <style>{props.customStyles}</style>
    </Helmet>
    <AppContext.Provider value={{ ignoreDefaultStyles: !!props.customStyles }}>{props.children}</AppContext.Provider>
  </Fragment>
);

export default Layout;
