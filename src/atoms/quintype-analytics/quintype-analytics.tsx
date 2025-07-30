import { withStoryAndConfig } from "../../context";

export const QuintypeAnalyticsBase = ({ story }) => {
  if (!story.id) {
    return null;
  }

  // Show deprecation warning in all environments
  console.warn(
    "QuintypeAnalytics (qlitics) is deprecated and has been disabled. " +
      "The qlitics service is being discontinued. " +
      "Note: There is no direct replacement for qlitics story view tracking."
  );

  // Always return null - qlitics is completely deprecated
  return null;
};

const QuintypeAnalytics = withStoryAndConfig(QuintypeAnalyticsBase);

export { QuintypeAnalytics };
