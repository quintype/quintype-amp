import React from "react";
import { Helmet } from "react-helmet";
import { TitleTypes } from "./types";

const Title = (props: TitleTypes) => {
  return (
    <Helmet>
      <title>{props.children}</title>
    </Helmet>
  );
};

export default Title;
