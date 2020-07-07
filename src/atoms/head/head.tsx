import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { HeadTypes } from "./types";

/**
 *
 * Head component is a simple wrapper for the [react-helmet](https://www.npmjs.com/package/react-helmet) `<Helmet />` component.
 * It puts child items in the document head. Scripts, styles, SEO meta tags, link tag etc. can be given as children to this component.
 * Can be used multiple times or nested.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.children child components
 *
 * @category Atoms
 * @module Head
 */

export const Head = ({ children }: HeadTypes) => (
  <Fragment>
    <Helmet>{children}</Helmet>
  </Fragment>
);
