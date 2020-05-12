import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HeadTypes } from "./types";

export const Head = ({ children }: HeadTypes) => (
  <Fragment>
    <Helmet>{children}</Helmet>
  </Fragment>
);
