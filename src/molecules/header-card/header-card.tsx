import React from "react";
import { withStoryAndConfig } from "../../context";
import { HeaderCardTypes } from "./types";
import { HeroImage } from "../index";
import { Spacer, Section, Author } from "../../atoms";
import styled from "styled-components";

const Headline = styled.h1`
	font-family: ${(props) => props.theme.font.family.primary};
	font-size: ${(props) => props.theme.font.size.l};
	color: ${(props) => props.theme.color.black}
	line-height: ${(props) => props.theme.font.lineHeight.level2};
	margin: 0;
	font-weight: bold;
}
`;

const HeaderCardBase = ({ story }: HeaderCardTypes) => {
  return (
    <div>
      <HeroImage story={story} />
      <Spacer token="xs" />
      <Section section={story.sections[0]} />
      <Spacer token="xs" />
      <Headline>{story.headline}</Headline>
      <Spacer token="xs" />
      <Author authors={story.authors} prepend="By" />
      <Spacer token="xs" />
    </div>
  );
};

const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
