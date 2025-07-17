import React from "react";
import get from "lodash.get";
import { StoryElementProps } from "../types";
import styled from "styled-components";
import { media } from "../../../utils/media";
import { getLocalizedWord } from "../../../utils/localize-words/localization";
import { withStoryAndConfig } from "../../../context";

const AttachmentWrapper = styled.div`
  font-size: ${(props) => props.theme.font.size.m};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 15px 25px;
  border: ${(props) => `1px solid ${props.theme.color.mono3}`};

  ${media.laptop`
    flex-direction: row;
  `}
`;
export const PreviewLink = styled.a`
  border: ${(props) => `1px solid ${props.theme.color.mono4}`};
  border-radius: 3px;
  padding: 10px 25px;
  color: unset;
  text-decoration: none;
  margin: 15px 0 0 0;

  ${media.laptop`
    margin: 0 0 0 15px;
  `}
`;

/**
 * Attachment is a story element and is displayed for type: file, subtype: attachment
 *
 * @param {Object} params object containing parameters
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 *
 * @category StoryElements
 * @module FacebookElement
 * @component
 */

export const AttachmentBase = ({ element, story, config, counter }: StoryElementProps) => {
  const attachmentRender = get(config, ["opts", "render", "storyElementRender", "attachmentRender"], null);
  return attachmentRender ? (
    attachmentRender({ story, config, element, counter })
  ) : (
    <AttachmentWrapper>
      <div>{element["file-name"]}</div>
      <PreviewLink href={element.url} target="_blank" rel="noopener noreferrer" download="">
        {getLocalizedWord(config, "attachmentElementPreview", "Preview")}
      </PreviewLink>
    </AttachmentWrapper>
  );
};

export const Attachment = withStoryAndConfig(AttachmentBase);
