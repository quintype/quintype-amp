import React from "react";
import { withStoryAndConfig } from "../../context";
import { HeaderCardTypes } from "./types";
import { HeroImage } from "../hero-image";
import { Spacer, Section, Author } from "../../atoms";
import { SocialShareHeader } from "../social-share-header";
import styled from "styled-components";
import { DateLastPublished } from "../date";

const Headline = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.black};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  margin: 0;
  font-weight: bold;
`;
const HeaderCardContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
  border-bottom: ${(props) => `1px solid ${props.theme.color.black}`};
`;
const HeaderCardBase = ({ story }: HeaderCardTypes) => {
  return (
    <div>
      <HeroImage />
      <Spacer token="xs" />
      <HeaderCardContainer>
        <Section section={story.sections[0]} />
        <Spacer token="xs" />
        <Headline>{story.headline}</Headline>
        <Spacer token="s" />
        <Author authors={story.authors} prepend="By " />
        <Spacer token="xxs" />
        <DateLastPublished />
        <Spacer token="m" />
        <SocialShareHeader />
        <Spacer token="s" />
      </HeaderCardContainer>
    </div>
  );
};

const HeaderCard = withStoryAndConfig(HeaderCardBase);

export { HeaderCard };
