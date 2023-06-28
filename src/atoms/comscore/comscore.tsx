import React from "react";
import { withConfig } from "../../context";
import { Analytics } from "../analytics";

const ComScoreBase = ({ config }) => {
  if (!config.ampConfig["comscore-tracking-vars"]) {
    return null;
  }
  const targets = {
    vars: { ...config.ampConfig["comscore-tracking-vars"] },
    extraUrlParams: {
      comscorekw: "amp"
    },
    triggers: {
      storyPageview: {
        on: "story-page-visible",
        request: "pageview"
      }
    }
  };
  return <Analytics type="comscore" targets={targets} />;
};

const ComScore = withConfig(ComScoreBase);

export { ComScore, ComScoreBase };
