import React from "react";
import { withStoryAndConfig } from "../../context";
import { DefaultHeaderCard } from "./container-components";
import { HeaderCardTypes } from "./types";

const HeaderCardBase = ({ story, config }: HeaderCardTypes) => {
  return config.opts && config.opts.headerCardRender ? (
    config.opts.headerCardRender({ story, config })
  ) : (
    <DefaultHeaderCard story={story} config={config} />
  );
};

const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
