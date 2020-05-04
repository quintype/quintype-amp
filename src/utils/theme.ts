import { AMPConfig } from "../types/config";

const isEmpty = (text: string) => (text.length < 1 ? true : false);

export const getTokensFromAMPConfig = (config: AMPConfig) => {
  const { colors } = config;
  const { fonts } = config;
  return {
    color: {
      ...(!isEmpty(colors.primary) && { primaryColor: colors.primary }),
      ...(!isEmpty(colors.secondary) && { secondaryColor: colors.secondary }),
      ...(!isEmpty(colors["header-background"]) && { headerBackground: colors["header-background"] }),
      ...(!isEmpty(colors["footer-background"]) && { footerBackground: colors["footer-background"] }),
      ...(!isEmpty(colors["footer-text-color"]) && { footerTextColor: colors["footer-text-color"] }),
      ...(!isEmpty(colors["section-text-color"]) && { sectionTextColor: colors["section-text-color"] })
    },
    font: {
      family: {
        ...(!isEmpty(fonts.primary.family) && { primary: fonts.primary.family }),
        ...(!isEmpty(fonts.secondary.family) && { secondary: fonts.secondary.family })
      }
    }
  };
};
