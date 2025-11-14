import React from "react";
import { withConfig } from "../../../context";
import { DfpAd, Spacer } from "../../../atoms";
import { getPropsForDfpAd } from "../shared/helpers";
import { CommonDfpAdTypes } from "../shared/types";
import { AdWrapper } from "../shared/components";
import get from "lodash.get";

export const BodyAdBase = ({ children, config, templateName, ...overridingProps }: CommonDfpAdTypes) => {
  const enabled = get(config, ["opts", "featureConfig", "enableAds", templateName, "body"], true);
  if (!enabled) return null;

  const multipleBodyAds = getPropsForDfpAd({ overridingProps, config, adName: "body-ads" });

  const propsForBodyAd = multipleBodyAds || getPropsForDfpAd({ overridingProps, config, adName: "body-ad" });

  if (!propsForBodyAd) return null;

  return (
    <AdWrapper>
      <Spacer token="s" />
      <DfpAd {...propsForBodyAd}>{children}</DfpAd>
      <Spacer token="s" />
    </AdWrapper>
  );
};

export const BodyAd = withConfig(BodyAdBase);
