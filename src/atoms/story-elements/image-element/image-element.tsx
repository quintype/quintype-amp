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
    imageElementRender({ story, config })
  ) : (
    <Image slug={element["image-s3-key"]} metadata={element["image-metadata"]}>
      {element.title && element.title.length > 1 && <StyledFigCaption>{element.title}</StyledFigCaption>}
    </Image>
  );
};

/**
 * ImageElement is a story element.
 * The look of the ImageElement can be changed using the render prop imageElementRender. In case imageElementRender is passed in the config, it is rendered. Otherwise a default ImageElement is rendered.
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    imageElementRender: ({ story, config }) => <MyCustomImageElement story={story} config={config} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module ImageElement
 * @component
 */

export const ImageElement = withStoryAndConfig(ImageElementBase);
