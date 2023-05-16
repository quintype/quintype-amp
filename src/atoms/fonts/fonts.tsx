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
      <link rel="preload" as="style" crossorigin="anonymous" href={customFonts?.primary1} />
      <link rel="preload" as="style" crossorigin="anonymous" href={customFonts?.secondary1} />
      <link rel="preload" as="style" crossorigin="anonymous" href={customFonts?.primary2} />
      <link rel="preload" as="style" crossorigin="anonymous" href={customFonts?.secondary2} />
    </Helmet>
  );
};

/**
 * Amp library supports google fonts as well as custom fonts. This Fonts component accepts primary and secondary google fonts from BOlD AMP  settings `settings > configure > AMP` and four different custom fonts from render props `customFonts`. These custom font urls are passed to the link tags that are preloaded. 
 * In case customFonts is passed in the config, it is rendered along with the fonts mentioned in BOLD.
 *
 * Custom fonts can be hosted on allowed origins or can be added in the public folder of your app. 
 * If added in public folder, mention the asset host and path in the url like this "https://fea.assettype.com/malibu/assets/ 
  MalibuHeadlineSemiBold.woff2". 
 * 
 * The following origins are allowlisted and allowed for font serving via link tags as per official AMP documentation:
 * 
 * Typography.com: https://cloud.typography.com
 * Fonts.com: https://fast.fonts.net
 * Google Fonts: https://fonts.googleapis.com
 * Typekit: https://use.typekit.net
 * Font Awesome: https://maxcdn.bootstrapcdn.com, https://use.fontawesome.com
 * 
 * 
 * ```javascript
 * ...
 * ampRoutes(app, {
 *  render: {
 *    customFonts?: {
        primary1?: "https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold.woff2";
        secondary1?: "https://fea.assettype.com/malibu/assets/MalibuHeadlineTextRegular.woff2";
        primary2?: "https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold2.woff2";
        secondary2?: "https://fea.assettype.com/malibu/assets/MalibuHeadlineTextRegular2.woff2";
      };
 *  }
 * })
 * ...
 * ```
 *
 * @category Atoms
 * @module Fonts
 * @component
 */

export const Fonts = withStoryAndConfig(FontsBase);
