import React from "react";
import { Author, Section, Spacer } from "../../atoms";
import { HeroImage } from "../hero-image";
import { SocialShareHeader } from "../social-share-header";
import { DateLastPublished, DateUpdated } from "../date";
import { HeaderCardTypes } from "./types";
import { Headline, HeaderCardContainer, StyledDividingLine } from "./presentational-components";
import { getHeaderComponentConfig } from "./helpers";
import get from "lodash.get";

export const DefaultHeaderCard = ({ story, config }: HeaderCardTypes) => {
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

export const CustomHeaderCard = ({ story, config }: HeaderCardTypes) => {
  const configHeaderComponents = get(config, ["opts", "headerCardConfig", "components"]);
  return (
    <div>
      {configHeaderComponents.map((comp, idx) => {
        const Component = PickHeaderComponent(comp.name);
        return <Component key={idx} story={story} config={config} />;
      })}
    </div>
  );
};

export const PickHeaderComponent = (componentName: string) => {
  const name = componentName.toLowerCase();

  switch (name) {
    case "heroimage":
      return HeroImage;
    case "verticalspacer":
      return VerticalSpacer;
    case "horizontalspacer":
      return HorizontalSpacer;
    case "headline":
      return HeadlineForHeader;
    case "author":
      return AuthorForHeader;
    case "datelastpublished":
      return DateLastPublishedForHeader;
    case "dateupdated":
      return DateUpdatedForHeader;
    case "section":
      return SectionForHeader;
    case "socialshareheader":
      return SocialShareForHeader;
    case "dividingline":
      return DividingLine;
    default:
      throw new Error(`"${componentName}" is not a valid header component, but it is defined in the config`);
  }
};

// wrappers components. These take story, config as input and provide required props for the component they're wrapping
const HorizontalSpacer = ({ config }: HeaderCardTypes) => {
  const { size } = getHeaderComponentConfig({ componentName: "horizontalspacer", config });
  if (!size) throw new Error("size not specfied for horizontalspacer in headerCardConfig");
  return <Spacer token={size} align={"horizontal"} />;
};
const VerticalSpacer = ({ config }: HeaderCardTypes) => {
  const { size } = getHeaderComponentConfig({ componentName: "verticalspacer", config });
  if (!size) throw new Error("size not specfied for verticalspacer in headerCardConfig");
  return <Spacer token={size} align={"vertical"} />;
};
const HeadlineForHeader = ({ story }: HeaderCardTypes) => <Headline>{story.headline}</Headline>;
const AuthorForHeader = ({ story, config }: HeaderCardTypes) => {
  const { prepend } = getHeaderComponentConfig({ componentName: "author", config });
  return <Author authors={story.authors} prepend={prepend} />;
};
const DateLastPublishedForHeader = ({ config }: HeaderCardTypes) => {
  const { format, prepend } = getHeaderComponentConfig({ componentName: "datelastpublished", config });
  return <DateLastPublished format={format} prepend={prepend} />;
};
const DateUpdatedForHeader = ({ config }) => {
  const { prepend } = getHeaderComponentConfig({ componentName: "dateupdated", config });
  return <DateUpdated prepend={prepend} />;
};
const SectionForHeader = ({ story }) => <Section section={story.sections[0]} />;
const SocialShareForHeader = ({ config }) => {
  const fbAppId = get(config, ["publisherConfig", "facebook", "app-id"], null);
  return <SocialShareHeader fbAppId={fbAppId} />;
};
const DividingLine = () => <StyledDividingLine />;
