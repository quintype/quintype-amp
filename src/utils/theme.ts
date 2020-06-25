import { AMPConfig } from "../types/config";

const exists = (text?: string) => !!(text && text.length);

export const getTokensFromAMPConfig = (config: AMPConfig) => {
  const { colors } = config;
  const { fonts } = config;
  return {
    color: {
      ...(exists(colors.primary) && { primaryColor: colors.primary }),
      ...(exists(colors.secondary) && { secondaryColor: colors.secondary }),
      ...(exists(colors["header-background"]) && { headerBackground: colors["header-background"] }),
      ...(exists(colors["footer-background"]) && { footerBackground: colors["footer-background"] }),
      ...(exists(colors["footer-text-color"]) && { footerTextColor: colors["footer-text-color"] }),
      ...(exists(colors["section-text-color"]) && { sectionTextColor: colors["section-text-color"] })
    },
    font: {
      family: {
        ...(exists(fonts.primary.family) && { primary: fonts.primary.family }),
        ...(exists(fonts.secondary.family) && { secondary: fonts.secondary.family })
      }
    }
  };
};
