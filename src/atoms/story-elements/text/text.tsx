import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../types";
import { withStoryAndConfig } from "../../../context";
import { TextProps } from "./types";
import get from "lodash.get";

const StyledText = styled.div<StoryElementProps>`
  color: ${(props) => props.theme.color.mono6};
  font-size: ${(props) => props.theme.font.size.xs};
  font-family: ${(props) => props.theme.font.family.primary};
  line-height: ${(props) => props.theme.font.lineHeight.level3};

  p {
    margin: 0 0 ${(props) => props.theme.spacing.xs} 0;
    line-height: ${(props) => props.theme.font.lineHeight.level6};
  }
  a {
    color: ${(props) => props.theme.color.mono6};
  }
  ul {
    list-style: disc;
    margin: 0;
    padding: 0 0 0 ${(props) => props.theme.spacing.l};
  }

  ol {
    list-style: decimal;
    margin: 0;
    padding: 0 0 0 ${(props) => props.theme.spacing.l};
  }

  h2 {
    font-size: ${(props) => props.theme.font.size.huge};
    line-height: ${(props) => props.theme.font.lineHeight.level5};
    font-family: ${(props) => props.theme.font.family.primary};
    margin: 0 0 ${(props) => props.theme.spacing.s} 0;
  }

  h3 {
    font-size: ${(props) => props.theme.font.size.xl};
    line-height: ${(props) => props.theme.font.lineHeight.level5};
    font-family: ${(props) => props.theme.font.family.primary};
    margin: 0 0 ${(props) => props.theme.spacing.s} 0;
  }
`;

export const DefaultText = ({ element, externalLink }: StoryElementProps & TextProps) => {
  let text = element.text || "";
  if (externalLink) {
    text = text.replace(/<a/g, '<a target="_blank"');
  }

  return <StyledText element={element} dangerouslySetInnerHTML={{ __html: text }} />;
};

export const TextBase = ({ element, story, config }: StoryElementProps) => {
  const textElementRender = get(config, ["opts", "storyElementRender", "textElementRender"], null);
  return textElementRender ? (
    textElementRender({ story, config })
  ) : (
    <DefaultText element={element} story={story} config={config} />
  );
};
export const Text = withStoryAndConfig(TextBase);
