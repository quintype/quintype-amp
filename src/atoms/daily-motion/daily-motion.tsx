import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { StyledDailyMotionTypes, DailyMotionTypes } from "./types";
import styled from "styled-components";

export const StyledDailyMotion = styled.div.attrs(({ style }: StyledDailyMotionTypes) => ({
  style: style
}))<StyledDailyMotionTypes>``;

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
      <StyledDailyMotion style={inlineStyles}>
        <amp-dailymotion data-videoid={videoID} layout={layout} width={width} height={height} {...props} />
      </StyledDailyMotion>
    </Fragment>
  );
};

export { DailyMotion };
