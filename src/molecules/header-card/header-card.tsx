import React from "react";
import { withStoryAndConfig } from "../../context";
import { DefaultHeaderCard } from "./container-components";
import { CommonRenderPropTypes } from "../../types/config";

export const HeaderCardBase = ({ story, config }: CommonRenderPropTypes) => {
  return config.opts && config.opts.headerCardRender ? (
    config.opts.headerCardRender({ story, config })
  ) : (
    <DefaultHeaderCard story={story} config={config} />
  );
};

const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
