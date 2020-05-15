import React from "react";
import { withConfig } from "../../../context";
import { DfpAd } from "../../../atoms";
import { getPropsForDfpAd } from "../shared/helpers";
import { CommonDfpAdTypes } from "../shared/types";
import { AdWrapper } from "../shared/components";

const BottomAdBase = ({ children, config, ...overridingProps }: CommonDfpAdTypes) => {
  const propsForBottomAd = getPropsForDfpAd({ overridingProps, config, adName: "bottom-ad" });
  return (
    propsForBottomAd && (
      <AdWrapper>
        <DfpAd {...propsForBottomAd}>{children}</DfpAd>
      </AdWrapper>
    )
  );
};

export const BottomAd = withConfig(BottomAdBase);
