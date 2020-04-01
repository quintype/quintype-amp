import React from "react";
import { withConfig } from "../../../context";
import { Ad } from "../../../atoms";
import { AdTypes } from "../../../atoms/ad/types";
import { getAdPropsFromConfig, isEmpty } from "../helpers";
import { Config } from "../../../types/config";

const TopAdBase = ({ children, config, ...overridingProps }: AdTypes & Config) => {
  const propsForTopAd = isEmpty(overridingProps) ? getAdPropsFromConfig({ config, adName: "top-ad" }) : overridingProps;
  return <Ad {...propsForTopAd}>{children}</Ad>;
};

export const TopAd = withConfig(TopAdBase);
