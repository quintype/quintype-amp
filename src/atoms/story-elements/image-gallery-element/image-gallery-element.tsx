import React from "react";
import { StoryElementProps } from "../types";
import { ImageGalleryTypes } from "./types";
import { Carousel } from "../../carousel";
import { Image } from "../../image";
import styled from "styled-components";
import { media } from "../../../utils/media";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const StyledFigcaption = styled.figcaption`
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  max-height: 90px;
  color: ${(props) => props.theme.color.white};
  line-height: ${(props) => props.theme.font.lineHeight.level1};
  background: ${(props) => `${props.theme.color.black}60`};
  font-size: ${(props) => props.theme.font.size.xxs};
  z-index: ${(props) => props.theme.zIndex.z100};

  ${media.laptop`
		max-height: 130px;
		overflow-y: scroll;
	`}
`;

export const DefaultImageGalleryElement = ({
  element,
  height = "750",
  width = "1200",
  layout = "responsive",
  aspectRatio = [16, 9],
  type,
  lightbox,
  ...props
}: ImageGalleryTypes) => {
  // forcing imageGallery to false for now for vikatan.
  const imageGallery = element.metadata && element.metadata.type === "gallery" && false;
  const images =
    element["story-elements"] &&
    element["story-elements"].map((image) => (
      <Image
        key={image.id}
        metadata={image["image-metadata"]}
        slug={image["image-s3-key"]}
        aspectRatio={aspectRatio}
        alt={image.title}
        lightbox={imageGallery ? "imageGallery" : false}>
        {getFigcaptionText(image.title, image["image-attribution"]) && (
          <StyledFigcaption>{getFigcaptionText(image.title, image["image-attribution"])}</StyledFigcaption>
        )}
      </Image>
    ));
  const storyElements = element["story-elements"] && element["story-elements"].length >= 1;
  return (
    <>
      {storyElements &&
        (imageGallery ? (
          <StyledGallery>{images}</StyledGallery>
        ) : (
          <Carousel height={height} width={width} layout={layout} type="slides" {...props}>
            {images}
          </Carousel>
        ))}
    </>
  );
};

export function getFigcaptionText(caption, attribution) {
  if (caption && attribution) return `${caption}`;
  else if (caption || attribution) return `${caption || attribution}`;
  else return false;
}

export const ImageGalleryElementBase = ({ element, story, config }: StoryElementProps) => {
  const imageGalleryElementRender = get(
    config,
    ["opts", "render", "storyElementRender", "imageGalleryElementRender"],
    null
  );

  return imageGalleryElementRender ? (
    imageGalleryElementRender({ story, config, element })
  ) : (
    <DefaultImageGalleryElement element={element} />
  );
};

/**
 * ImageGalleryElement is a story element.
 * The look of the ImageGalleryElement can be changed using the render prop imageGalleryElementRender. In case imageGalleryElementRender is passed in the config, it is rendered. Otherwise a default ImageGalleryElement is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    imageGalleryElementRender: ({ story, config, element }) => <MyCustomImageGalleryElement story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module ImageGalleryElement
 * @component
 */
export const ImageGalleryElement = withStoryAndConfig(ImageGalleryElementBase);
