import { AMPConfig } from "../types/config";
import get from "lodash.get";

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
