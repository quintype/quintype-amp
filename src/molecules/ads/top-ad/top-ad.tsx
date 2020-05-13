import React from "react";
import { withConfig } from "../../../context";
import { DfpAd } from "../../../atoms";
import { getPropsForDfpAd } from "../shared/helpers";
import { CommonDfpAdTypes } from "../shared/types";
import { AdWrapper } from "../shared/components";

const TopAdBase = ({ children, config, ...overridingProps }: CommonDfpAdTypes) => {
  const propsForTopAd = getPropsForDfpAd({ overridingProps, config, adName: "top-ad" });
  return (
    propsForTopAd && (
      <AdWrapper>
        <DfpAd {...propsForTopAd}>{children}</DfpAd>
      </AdWrapper>
    )
  );
};

export const TopAd = withConfig(TopAdBase);
