import React from "react";
import { withStoryAndConfig } from "../../context";
import { DefaultHeaderCard, CustomHeaderCard } from "./container-components";
import get from "lodash.get";

const HeaderCardBase = ({ story, config }) => {
  const configHeaderComponents = get(config, ["opts", "headerCardConfig", "components"], []);
  return configHeaderComponents.length ? (
    <CustomHeaderCard story={story} config={config} />
  ) : (
    <DefaultHeaderCard story={story} config={config} />
  );
};

const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
