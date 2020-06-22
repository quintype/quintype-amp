import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import get from "lodash.get";
export const StyledBigfact = styled.div<StoryElementProps>`
  .bigfact-description {
    color: ${(props) => props.theme.color.mono6};
    line-height: ${(props) => props.theme.font.lineHeight.level5};
    font-size: ${(props) => props.theme.font.size.xs};
    margin-top: 10px;
  }
`;

export const BigfactBase = ({ element, story, config }: StoryElementProps) => {
  const bigfactElementRender = get(config, ["opts", "storyElementRender", "bigfactElementRender"], null);

  return bigfactElementRender ? (
    bigfactElementRender({ story, config })
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
