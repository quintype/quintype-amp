import React from "react";
import styled, { css } from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import { CommonRenderPropTypes } from "../../../../types/config";
import { TextProps } from "../types";

export const StyledBigfact = styled.div<StoryElementProps & TextProps>`
  .bigfact-description {
    color: ${(props) => props.theme.color.mono6};
    line-height: ${(props) => props.theme.font.lineHeight.level5};
    font-size: ${(props) => props.theme.font.size.xs};
    margin-top: 10px;
  }
  ${(props) =>
    props.element.subtype === "bigfact" &&
    (props.style && props.style.bigfact ? props.style.bigfact : baseBigfactStyles)}
`;

const baseBigfactStyles = css`
  color: ${(props) => props.theme.color.mono6};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  font-size: ${(props) => props.theme.font.size.l};
`;

export const BigfactBase = ({ element, story, config }: StoryElementProps & CommonRenderPropTypes) => {
  return config.opts && config.opts.storyElementRender && config.opts.storyElementRender.bigfactElementRender ? (
    config.opts.storyElementRender.bigfactElementRender({ story, config })
  ) : (
    <StyledBigfact
      element={element}
      story={story}
      config={config}
      as="div"
      dangerouslySetInnerHTML={{ __html: element.text || "" }}
    />
  );
};
export const Bigfact = withStoryAndConfig(BigfactBase);
