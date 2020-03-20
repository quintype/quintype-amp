import React from "react";
import { StoryElement } from "../../../types/story";
import styled from "styled-components";

export interface TextProps {
  element: StoryElement;
  externalLink?: boolean;
}

const BaseText = ({ element, externalLink }: TextProps) => {
  let text = element.text || "";
  if (externalLink) {
    text = text.replace(/<a/g, '<a target="_blank"');
  }
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};

const Text = styled(BaseText)`
  color: ${(props) => props.theme.color.mono6};
  font-size: ${(props) => props.theme.font.size.m};
  font-family: ${(props) => props.theme.font.family.primary};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  p {
    margin: 0 0 ${(props) => props.theme.spacing.xs} 0;
  }
  a {
    color: ${(props) => props.theme.color.primaryColor};
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

export { Text, BaseText };
