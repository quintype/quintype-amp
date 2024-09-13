import React from "react";
import styled from "styled-components";
import get from "lodash.get";
import { Image, DateTime, Spacer } from "../../atoms";
import { RelatedStoryCardTypes } from "./types";
import { getHumanizedDateTime } from "../../utils/date-time";

const Wrapper = styled.div`
  margin: ${(props) => `0 0 ${props.theme.spacing.l} 0`};
  border-bottom: ${(props) => `2px solid ${props.theme.color.mono1}`};
`;
const StyledAnchor = styled.a`
  text-decoration: none;
`;
const Headline = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.black};
  font-weight: bold;
`;

export const RelatedStoryCard = ({ story, config }: RelatedStoryCardTypes) => {
  const {
    headline,
    url,
    "hero-image-metadata": imgMetadata,
    "hero-image-s3-key": imgS3Key,
    "hero-image-attribution": imgAttr,
    "hero-image-caption": imgCaption,
    "hero-image-alt-text": imgAltText,
    "last-published-at": lastPublishedAt
  } = story;

  const languageCode = get(config, ["publisherConfig", "language", "ietf-code"]);
  const localizationOpts = get(config, ["opts", "featureConfig", "localization"], {});
  let timeStamp = lastPublishedAt;
  const storyCardTime = get(config, ["opts", "featureConfig", "storyCardTime"], null);
  if (storyCardTime && typeof storyCardTime === "function") {
    timeStamp = storyCardTime(config, story);
  }
  let humanizedDate = getHumanizedDateTime({
    dateFormat: "do MMM, yyyy 'at' p",
    timeZone: "Asia/Kolkata",
    timeStamp
  });

  if ("useLocaleDateStampOnGenericStory" in localizationOpts) {
    const useLocale =
      typeof localizationOpts.useLocaleDateStampOnGenericStory === "function"
        ? localizationOpts.useLocaleDateStampOnGenericStory(config)
        : localizationOpts.useLocaleDateStampOnGenericStory;

    if (useLocale) {
      humanizedDate = new Date(timeStamp).toLocaleDateString(languageCode, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
    }
  }
  const disableImgPreload: boolean = get(config, ["opts", "optimizeAmpHtml"], true);
  return (
    <Wrapper>
      <StyledAnchor href={url}>
        <Image
          metadata={imgMetadata}
          slug={imgS3Key}
          alt={imgAltText || imgCaption || imgAttr || "image"}
          useFallbackImage={true}
          disableImgPreload={disableImgPreload}
        />
        <Headline>{headline}</Headline>
        <DateTime formattedDate={humanizedDate} />
        <Spacer token="s" />
      </StyledAnchor>
    </Wrapper>
  );
};

/**
 * RelatedStoryCard Component uses the RelatedStoryCard atomic components internally depending on a condition orelse it uses `<amp-img>` component.
 *
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {String} props.story Required. A story object from related stories collection.
 *  @category Molecules
 * @component
 */
