import React from "react";
import { Analytics } from "../analytics";
import { withStoryAndConfig } from "../../context";

export const QuintypeAnalyticsBase = ({ story, config }) => {
  if (!story.id) {
    return null;
  }
  const targets = {
    requests: {
      storyview:
        "https://prod-analytics.qlitics.com/api/${random}/amp?publisher-id=${publisherId}&event-type=${eventType}&story-content-id=${storyContentId}&url=${ampdocUrl}&referrer=${documentReferrer}"
    },
    vars: { publisherId: config.publisherConfig["publisher-id"], storyContentId: story.id },
    triggers: { trackStoryview: { on: "visible", request: "storyview", vars: { eventType: "story-view" } } }
  };
  return <Analytics targets={targets} />;
};

const QuintypeAnalytics = withStoryAndConfig(QuintypeAnalyticsBase);

export { QuintypeAnalytics };
