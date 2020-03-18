import React from "react";
import { withStoryAndConfig } from "../../context";
import { HeaderCardTypes } from "./types";
import { HeroImage } from "../index";
import { Spacer, Section, Author, DateTime } from "../../atoms";
import styled from "styled-components";

const Headline = styled.h1`
	font-family: ${(props) => props.theme.font.family.primary};
	font-size: ${(props) => props.theme.font.size.l};
	color: ${(props) => props.theme.color.black}
	line-height: ${(props) => props.theme.font.lineHeight.level2};
	margin: 0;
	font-weight: bold;
`;
const HeaderCardContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const HeaderCardBase = ({ story }: HeaderCardTypes) => {
  return (
    <div>
      <HeroImage story={story} />
      <Spacer token="xs" />
      <HeaderCardContainer>
        <Section section={story.sections[0]} />
        <Spacer token="xs" />
        <Headline>{story.headline}</Headline>
        <Spacer token="s" />
        <Author authors={story.authors} prepend="By " />
        <Spacer token="xxs" />
        <DateTime dateTime={story["last-published-at"]} showTime={true} />
      </HeaderCardContainer>
    </div>
  );
};

const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
