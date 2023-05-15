import React from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";
import get from "lodash.get";

export const FontsBase = ({ config }) => {
  const { primary, secondary } = config.ampConfig.fonts;
  const customFonts = get(config, ["opts", "render", "customFonts"], null);
  return (
    <Helmet>
      <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link
        rel="preload"
        as="style"
        crossorigin="anonymous"
        href={`https://fonts.googleapis.com/css?family=${primary.url}&display=swap`}
      />
      <link
        rel="preload"
        as="style"
        crossorigin="anonymous"
        href={`https://fonts.googleapis.com/css?family=${secondary.url}&display=swap`}
      />
      <link rel="preload" as="style" crossorigin="anonymous" href={customFonts} />
    </Helmet>
  );
};

export const Fonts = withStoryAndConfig(FontsBase);
