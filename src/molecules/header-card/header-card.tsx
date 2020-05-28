import React from "react";
import { withStoryAndConfig } from "../../context";
import { DefaultHeaderCard, PickHeaderComponent } from "./container-components";
import get from "lodash.get";
import { HeaderCardTypes } from "./types";

const HeaderCardBase = ({ story, config }) => {
  const configHeaderComponents = get(config, ["opts", "headerCardConfig", "components"], []);
  return configHeaderComponents.length ? (
    <CustomHeaderCard story={story} config={config} />
  ) : (
    <DefaultHeaderCard story={story} config={config} />
  );
};

const HeaderCard = withStoryAndConfig(HeaderCardBase);

const CustomHeaderCard = ({ story, config }: HeaderCardTypes) => {
  const configHeaderComponents = get(config, ["opts", "headerCardConfig", "components"]);
  return (
    <div>
      {configHeaderComponents.map((comp, idx) => {
        const Component = PickHeaderComponent(comp.name);
        return <Component key={idx} story={story} config={config} />;
      })}
    </div>
  );
};

export { HeaderCard };
