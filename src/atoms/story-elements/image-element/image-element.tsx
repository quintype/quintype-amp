import React from "react";

import { Image } from "../../image";
import { media } from "../../../utils/media";
import { StoryElementProps } from "../types";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

const StyledFigCaption = styled.figcaption`
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  max-height: 90px;
  color: ${(props) => props.theme.color.white};
  line-height: ${(props) => props.theme.font.lineHeight.level1};
  background: ${(props) => `${props.theme.color.black}90`};
  font-size: ${(props) => props.theme.font.size.xxs};
  z-index: ${(props) => props.theme.zIndex.z100};

  ${media.laptop`
		max-height: 130px;
		overflow-y: scroll;
	`}
`;

export const ImageElementBase = ({ element, story, config }: StoryElementProps) => {
  const imageElementRender = get(config, ["opts", "storyElementRender", "imageElementRender"], null);
  return imageElementRender ? (
    imageElementRender({ story, config, element })
  ) : (
    <Image slug={element["image-s3-key"]} metadata={element["image-metadata"]}>
      {element.title && element.title.length > 1 && (
        <StyledFigCaption dangerouslySetInnerHTML={{ __html: element.title || "" }} />
      )}
    </Image>
  );
};

/**
 * ImageElement is a story element.
 * The look of the ImageElement can be changed using the render prop imageElementRender. In case imageElementRender is passed in the config, it is rendered. Otherwise a default ImageElement is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    imageElementRender: ({ story, config, element }) => <MyCustomImageElement story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module ImageElement
 * @component
 */

export const ImageElement = withStoryAndConfig(ImageElementBase);
