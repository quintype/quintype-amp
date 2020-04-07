import React from "react";
import { withConfig } from "../../../context";
import { Ad } from "../../../atoms";
import { AdTypes } from "../../../atoms/ad/types";
import { getAdPropsFromConfig, isEmpty, getDataSlotFromUnitPath } from "../helpers";
import { Config } from "../../../types/config";
import styled from "styled-components";

const AdWrapper = styled.div`
  text-align: center;
`;

const TopAdBase = ({ children, config, ...overridingProps }: AdTypes & Config) => {
  const propsForTopAd = isEmpty(overridingProps)
    ? getDataSlotFromUnitPath(getAdPropsFromConfig({ config, adName: "top-ad" }))
    : overridingProps;

  return (
    <AdWrapper>
      <Ad type="doubleclick" {...propsForTopAd}>
        {children}
      </Ad>
    </AdWrapper>
  );
};

export const TopAd = withConfig(TopAdBase);
