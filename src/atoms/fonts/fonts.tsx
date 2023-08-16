import React from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";

export const FontsBase = ({ config }) => {
  const { primary, secondary } = config.ampConfig.fonts;

  return (
    <Helmet>
      <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link
        rel="stylesheet"
        crossorigin="anonymous"
        href={`https://fonts.googleapis.com/css?family=${primary.url}&display=swap`}
      />
      <link
        rel="stylesheet"
        crossorigin="anonymous"
        href={`https://fonts.googleapis.com/css?family=${secondary.url}&display=swap`}
      />
    </Helmet>
  );
};

export const Fonts = withStoryAndConfig(FontsBase);
