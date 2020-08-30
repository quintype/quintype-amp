import React from "react";
import { withConfig } from "../../../context";
import { DfpAd } from "../../../atoms";
import { getPropsForDfpAd } from "../shared/helpers";
import { CommonDfpAdTypes } from "../shared/types";
import { AdWrapper } from "../shared/components";
import get from "lodash.get";

export const BottomAdBase = ({ children, config, templateName, ...overridingProps }: CommonDfpAdTypes) => {
  const propsForBottomAd = getPropsForDfpAd({ overridingProps, config, adName: "bottom-ad" });
  const enabled =
    !!propsForBottomAd && get(config, ["opts", "featureConfig", "enableAds", templateName, "bottom"], true);
  return (
    enabled && (
      <AdWrapper darkBackground={true}>
        <DfpAd {...propsForBottomAd}>{children}</DfpAd>
      </AdWrapper>
    )
  );
};

export const BottomAd = withConfig(BottomAdBase);
