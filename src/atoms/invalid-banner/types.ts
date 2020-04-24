import { Story } from "../../types/story";
import { DefaultTheme, CSSObject } from "styled-components";

export interface InvalidBannerTypes {
  story: Story;
  style?: CustomStyles;
  theme?: DefaultTheme;
}

interface CustomStyles {
  wrapper?: (theme) => CSSObject;
  banner?: (theme) => CSSObject;
}
