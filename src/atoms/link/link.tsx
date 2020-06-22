import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

export const Link = (props) => (
  <Fragment>
    <Helmet>
      <link {...props} />
    </Helmet>
  </Fragment>
);
