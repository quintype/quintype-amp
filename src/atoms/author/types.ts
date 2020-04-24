import { Author } from "../../types/story";
import { DefaultTheme, CSSObject } from "styled-components";

export interface AuthorProps {
  authors: Author[];
  prepend?: string | React.Component | React.ReactElement;
  style?: CustomStyles;
  theme?: DefaultTheme;
}

interface CustomStyles {
  author?: (theme) => CSSObject;
}
