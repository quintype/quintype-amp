import React from "react";
import { withConfig } from "../../../context";
import { DfpAd } from "../../../atoms";
import { getPropsForDfpAd } from "../shared/helpers";
import { CommonDfpAdTypes } from "../shared/types";
import { AdWrapper } from "../shared/components";
import get from "lodash.get";

export const TopAdBase = ({ children, templateName, config, ...overridingProps }: CommonDfpAdTypes) => {
  const propsForTopAd = getPropsForDfpAd({ overridingProps, config, adName: "top-ad" });
  const enabled = !!propsForTopAd && get(config, ["opts", "featureConfig", "enableAds", templateName, "top"], true);

  return (
    enabled && (
      <AdWrapper darkBackground={true}>
        <DfpAd {...propsForTopAd} prefetchScript={true}>
          {children}
        </DfpAd>
      </AdWrapper>
    )
  );
};

export const TopAd = withConfig(TopAdBase);
