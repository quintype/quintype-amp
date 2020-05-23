import React from "react";
import { withStoryAndConfig } from "../../context";
import { Analytics } from "../analytics";

const ChartBeatBase = ({ story, config }) => {
  if (!config.ampConfig["chartbeat"]) {
    return null;
  }
  const sections = story.sections.map((section) => section.name);
  const authors = story["author-name"];
  const targets = {
    vars: {
      uid: config.ampConfig.chartbeat["uid"],
      domain: config.ampConfig.chartbeat["domain"],
      useCanonical: true,
      sections: sections,
      authors: authors
    }
  };
  return <Analytics type="chartbeat" targets={targets} />;
};

const ChartBeat = withStoryAndConfig(ChartBeatBase);

export { ChartBeat, ChartBeatBase };
