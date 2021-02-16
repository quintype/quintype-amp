import get from "lodash.get";
import { Config } from "../../types/config";

export const infiniteScrollExists = (config: Config): boolean => {
  const infiniteScrollInlineConfig = get(
    config,
    ["opts", "featureConfig", "infiniteScroll", "infiniteScrollInlineConfig"],
    null
  );
  return !!(infiniteScrollInlineConfig && infiniteScrollInlineConfig.length);
};
