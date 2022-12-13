import React from "react";
import { withStoryAndConfig } from "../../context";
import { Analytics } from "../analytics";

const ChartBeatBase = ({ story, config }) => {
  const chartbeatConfig = config.ampConfig.chartbeat;
  if (!chartbeatConfig || !chartbeatConfig.uid) {
    return null;
  }
  const sections = story.sections.map((section) => section.name).join(",");
  const authors = story["author-name"];
  const domain = config.publisherConfig["sketches-host"].replace("https://www.", "");
  const targets = {
    vars: {
      uid: chartbeatConfig.uid,
      domain,
      useCanonical: true,
      sections,
      authors
    }
  };
  return <Analytics type="chartbeat" targets={targets} />;
};

const ChartBeat = withStoryAndConfig(ChartBeatBase);

export { ChartBeat, ChartBeatBase };
