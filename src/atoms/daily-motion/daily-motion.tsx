import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { DailyMotionTypes } from "./types";
import styled from "styled-components";

const StyledDailyMotion = styled.div.attrs(({ inlineStyles }: StyledDailyMotionTypes) => ({
  style: inlineStyles
}))<StyledDailyMotionTypes>``;

export interface StyledDailyMotionTypes {
  inlineStyles?: object;
}

const DailyMotion = ({
  layout = "responsive",
  width = "16",
  height = "9",
  "data-videoid": videoID,
  inlineStyles,
  ...props
}: DailyMotionTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-dailymotion"
          src="https://cdn.ampproject.org/v0/amp-dailymotion-0.1.js"
        />
      </Helmet>
      <StyledDailyMotion inlineStyles={inlineStyles}>
        <amp-dailymotion data-videoid={videoID} layout={layout} width={width} height={height} {...props} />
      </StyledDailyMotion>
    </Fragment>
  );
};

export { DailyMotion };
