import get from "lodash.get";

export const getLocalizedWord = (config, word, fallback) => {
  const optsConfig = get(config, ["opts"], {});
  const localizationConfig =
    typeof optsConfig.localization === "function" ? optsConfig.localization(config) : optsConfig.localization;
  return localizationConfig[word] || fallback;
};
