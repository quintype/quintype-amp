import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HeadTypes } from "./types";

export const Head = ({ children }: HeadTypes) => (
  /**
   * The Head component is to be primarily used while building custom templates.
   * <Head> will ignore <title>, <meta> and <link> tags under following circumstances:
   *     1. You're using default templates that come with the library
   *     2. You're using custom templates and pass "seo" to "ampifyStory"
   */

  <Fragment>
    <Helmet>{children}</Helmet>
  </Fragment>
);
