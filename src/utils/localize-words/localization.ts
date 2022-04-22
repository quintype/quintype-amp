import get from "lodash.get";
import { Config } from "../../types/config";

export const getLocalizedWord = (config: Config | undefined, word: string, fallback: string) => {
  const optsConfig = get(config, ["opts"], {});
  const localizationConfig =
    typeof optsConfig.localization === "function" ? optsConfig.localization(config) : optsConfig.localization;
  return localizationConfig ? localizationConfig[word] : fallback;
};
