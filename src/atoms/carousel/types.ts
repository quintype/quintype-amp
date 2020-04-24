import { ReactElement } from "react";
import { Common } from "../common-types";
import { DefaultTheme, CSSObject } from "styled-components";

export interface CarouselTypes extends Common {
  type: "slides" | "carousel";
  id?: string;
  controls?: boolean;
  "data-next-button-aria-label"?: string;
  "data-prev-button-aria-label"?: string;
  "data-button-count-format"?: string;
  autoplay?: boolean | string;
  delay?: string;
  loop?: boolean;
  slide?: string;
  children?: JSX.Element[] | JSX.Element | ReactElement;
  style?: CustomStyles;
  theme?: DefaultTheme;
}

interface CustomStyles {
  carousel?: (theme) => CSSObject;
}
