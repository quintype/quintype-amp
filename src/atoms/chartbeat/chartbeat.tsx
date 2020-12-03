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
  const targets = {
    vars: {
      uid: chartbeatConfig.uid,
      domain: chartbeatConfig.domain,
      useCanonical: true,
      sections,
      authors
    }
  };
  return <Analytics type="chartbeat" targets={targets} />;
};

const ChartBeat = withStoryAndConfig(ChartBeatBase);

export { ChartBeat, ChartBeatBase };
