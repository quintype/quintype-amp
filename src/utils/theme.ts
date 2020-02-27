import { Config } from "../types/config";

const isEmpty = (text: string) => (text.length < 1 ? true : false);

export const getTokensFromConfig = (config: Config) => {
  const { theme } = config;

  return {
    color: {
      ...(!isEmpty(theme.colors.primary) && { primaryColor: theme.colors.primary }),
      ...(!isEmpty(theme.colors.secondary) && { secondaryColor: theme.colors.secondary }),
      ...(!isEmpty(theme.colors["header-background"]) && { headerBackground: theme.colors["header-background"] }),
      ...(!isEmpty(theme.colors["footer-background"]) && { footerBackground: theme.colors["footer-background"] }),
      ...(!isEmpty(theme.colors["footer-text-color"]) && { footerTextColor: theme.colors["footer-text-color"] }),
      ...(!isEmpty(theme.colors["section-text-color"]) && { sectionBackground: theme.colors["section-text-color"] })
    }
  };
};
