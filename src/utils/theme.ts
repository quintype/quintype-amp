import { AMPConfig } from "../types/config";
import get from "lodash.get";
import { invertHexColor } from "../helpers";
import defaultTokens from "../context/theme/tokens";
import merge from "lodash.merge";

export const getTokensFromAMPConfig = (config: AMPConfig) => {
  const { colors } = config;
  const { fonts } = config;
  return {
    color: {
      ...(get(colors, ["primary"], null) && { primaryColor: colors.primary }),
      ...(get(colors, ["secondary"], null) && { secondaryColor: colors.secondary }),
      ...(get(colors, ["header-background"], null) && { headerBackground: colors["header-background"] }),
      ...(get(colors, ["footer-background"], null) && { footerBackground: colors["footer-background"] }),
      ...(get(colors, ["footer-text-color"], null) && { footerTextColor: colors["footer-text-color"] }),
      ...(get(colors, ["section-text-color"], null) && { sectionTextColor: colors["section-text-color"] })
    },
    font: {
      family: {
        ...(get(fonts, ["primary", "family"], null) && { primary: fonts.primary.family }),
        ...(get(fonts, ["secondary", "family"], null) && { secondary: fonts.secondary.family })
      }
    }
  };
};

/**
 * Inverts colors for datk theme
 * For now this only inverts mono1 - mono7 colors. Add more as per use case later
 *
 */
export const getTokensForDarkTheme = (config) => {
  const tokensFromConfig = getTokensFromAMPConfig(config.ampConfig);
  const darkThemeDefaultTokens = {
    color: {
      mono1: invertHexColor(defaultTokens.color.mono1),
      mono2: invertHexColor(defaultTokens.color.mono2),
      mono3: invertHexColor(defaultTokens.color.mono3),
      mono4: invertHexColor(defaultTokens.color.mono4),
      mono5: invertHexColor(defaultTokens.color.mono5),
      mono6: invertHexColor(defaultTokens.color.mono6),
      mono7: invertHexColor(defaultTokens.color.mono7)
    }
  };
  const tokens = merge(darkThemeDefaultTokens, tokensFromConfig);
  return tokens;
};
