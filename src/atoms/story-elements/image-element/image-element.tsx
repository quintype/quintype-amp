import React from "react";

import { Image } from "../../image";
import { media } from "../../../utils/media";
import { StoryElementProps } from "../types";
import styled from "styled-components";

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
  background: ${(props) => `${props.theme.color.black}60`};
  font-size: ${(props) => props.theme.font.size.xxs};
  z-index: ${(props) => props.theme.zIndex.z100};

  ${media.laptop`
		max-height: 130px;
		overflow-y: scroll;
	`}
`;

const ImageElement = ({ element }: StoryElementProps) => (
  <Image slug={element["image-s3-key"]} metadata={element["image-metadata"]}>
    {element.title && element.title.length > 1 && <StyledFigCaption>{element.title}</StyledFigCaption>}
  </Image>
);

export { ImageElement };
