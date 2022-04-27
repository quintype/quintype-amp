import get from "lodash.get";
import { Config } from "../../types/config";

export const getLocalizedWord = (config: Config | undefined, label: string, fallback: string) => {
  const { translations } = get(config, ["opts", "featureConfig", "localization"], {});
  const translationsConfig = typeof translations === "function" ? translations(config) : translations;

  if (translationsConfig && translationsConfig[label]) {
    return translationsConfig[label];
  }

  return fallback;
};
