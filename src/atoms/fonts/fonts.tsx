import React from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";

export const FontsBase = ({ config }) => {
  const { primary, secondary } = config.ampConfig.fonts;
  const { url: primaryUrl, family: primaryFamily } = primary;
  const { url: secondaryUrl, family: secondaryFamily } = secondary;

  return (
    <Helmet>
      <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link
        rel="preload"
        as="style"
        crossorigin="anonymous"
        href={`https://fonts.googleapis.com/css?family=${primaryUrl}`}
      />
      <link
        rel="preload"
        as="style"
        crossorigin="anonymous"
        href={`https://fonts.googleapis.com/css?family=${secondaryUrl}`}
      />
      <style>{`
        @font-face {
          font-family: ${primaryFamily};
          src: url(https://fonts.googleapis.com/css?family=${primaryUrl});
          font-display: block;
        }
        @font-face {
          font-family: ${secondaryFamily};
          src: url(https://fonts.googleapis.com/css?family=${secondaryUrl});
          font-display: block;
        }
      `}</style>
    </Helmet>
  );
};

export const Fonts = withStoryAndConfig(FontsBase);
