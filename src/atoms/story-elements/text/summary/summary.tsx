import React from "react";
import styled, { css } from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import { CommonRenderPropTypes } from "../../../../types/config";
import { TextProps } from "../types";

export const StyledSummary = styled.p<StoryElementProps & TextProps>`
  margin: 0 0 ${(props) => props.theme.spacing.xs} 0;
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  ${(props) =>
    props.element.subtype === "summary" &&
    (props.style && props.style.summary ? props.style.summary : baseSummaryStyles)}

  p {
    margin: 0 0 ${(props) => props.theme.spacing.xs} 0;
    line-height: ${(props) => props.theme.font.lineHeight.level6};
    color: ${(props) => props.theme.color.mono5};
  }
`;

const baseSummaryStyles = css`
  font-style: italic;
  color: ${(props) => props.theme.color.mono5};
`;

export const SummaryBase = ({ element, story, config }: StoryElementProps & CommonRenderPropTypes) => {
  return config.opts && config.opts.storyElementRender && config.opts.storyElementRender.summaryElementRender ? (
    config.opts.storyElementRender.summaryElementRender({ story, config })
  ) : (
    <StyledSummary
      element={element}
      story={story}
      config={config}
      as="p"
      dangerouslySetInnerHTML={{ __html: element.text || "" }}
    />
  );
};
export const Summary = withStoryAndConfig(SummaryBase);
