import React from "react";
import { Author, Section, Spacer } from "../../atoms";
import { HeroImage } from "../hero-image";
import { SocialShareHeader } from "../social-share-header";
import { DateLastPublished } from "../date";
import { CommonRenderPropTypes } from "../../types/config";
import { Headline, HeaderCardContainer } from "./presentational-components";

export const DefaultHeaderCard = ({ story, config }: CommonRenderPropTypes) => {
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
