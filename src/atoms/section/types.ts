import { Section } from "../../types/story";
import { DefaultTheme, CSSObject } from "styled-components";

export interface SectionProps {
  section: Section;
  style?: CustomStyles;
  theme?: DefaultTheme;
}

interface CustomStyles {
  wrapper?: (theme) => CSSObject;
}
