import React from "react";
import { withConfig } from "../../../context";
import { DfpAd, Spacer } from "../../../atoms";
import { getPropsForDfpAd } from "../shared/helpers";
import { CommonDfpAdTypes } from "../shared/types";
import { AdWrapper } from "../shared/components";
import get from "lodash.get";

export const BodyAdBase = ({ children, config, templateName, ...overridingProps }: CommonDfpAdTypes) => {
  const propsForBodyAd = getPropsForDfpAd({ overridingProps, config, adName: "body-ad" });
  const enabled = !!propsForBodyAd && get(config, ["opts", "featureConfig", "enableAds", templateName, "body"], true);
  return (
    enabled && (
      <AdWrapper>
        <Spacer token="s" />
        <DfpAd {...propsForBodyAd}>{children}</DfpAd>
        <Spacer token="s" />
      </AdWrapper>
    )
  );
};

export const BodyAd = withConfig(BodyAdBase);
