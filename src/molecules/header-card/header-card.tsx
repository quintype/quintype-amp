import React from "react";
import styled from "styled-components";
import { withStoryAndConfig } from "../../context";
import { Author, Section, Spacer } from "../../atoms";
import { HeroImage } from "../hero-image";
import { SocialShareHeader } from "../social-share-header";
import { DateLastPublished } from "../date";
import { HeaderCardTypes } from "./types";

const HeaderCardBase = ({ story, config }: HeaderCardTypes) => {
  return config.opts && config.opts.headerCardRender ? (
    config.opts.headerCardRender({ story, config })
  ) : (
    <DefaultHeaderCard story={story} config={config} />
  );
};

export const HeaderCard = withStoryAndConfig(HeaderCardBase);

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

const DefaultHeaderCard = ({ story, config }: HeaderCardTypes) => {
  const { publisherConfig } = config;
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
        <SocialShareHeader fbAppId={publisherConfig.facebook && publisherConfig.facebook["app-id"]} />
        <Spacer token="s" />
      </HeaderCardContainer>
    </div>
  );
};
