import React from "react";
import { withStoryAndConfig } from "../../context";
import { Analytics } from "../analytics";

const ChartBeatBase = ({ story, config }) => {
  if (!config.ampConfig["chartbeat"]) {
    return null;
  }
  const sections = story && story.sections[0]["name"];
  const authors = story && story["author-name"];
  const enableCanonical = story && story["canonical-url"] === null ? false : true;
  const targets = {
    vars: {
      uid: config.ampConfig.chartbeat["uid"],
      domain: config.ampConfig.chartbeat["domain"],
      useCanonical: enableCanonical,
      sections: sections,
      authors: authors
    }
  };
  return <Analytics type="chartbeat" targets={targets} />;
};

const ChartBeat = withStoryAndConfig(ChartBeatBase);

export { ChartBeat, ChartBeatBase };
