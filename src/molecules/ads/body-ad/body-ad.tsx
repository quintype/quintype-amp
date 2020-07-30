import React from "react";
import { withConfig } from "../../../context";
import { DfpAd } from "../../../atoms";
import { getPropsForDfpAd } from "../shared/helpers";
import { CommonDfpAdTypes } from "../shared/types";
import { AdWrapper } from "../shared/components";

export const BodyAdBase = ({ children, config, ...overridingProps }: CommonDfpAdTypes) => {
  const propsForBodyAd = getPropsForDfpAd({ overridingProps, config, adName: "body-ad" });
  return (
    propsForBodyAd && (
      <AdWrapper>
        <DfpAd {...propsForBodyAd}>{children}</DfpAd>
      </AdWrapper>
    )
  );
};

export const BodyAd = withConfig(BodyAdBase);
