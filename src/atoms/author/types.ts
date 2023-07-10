import { Story } from "../../types/story";
import { Author } from "../../types/story";

export interface AuthorProps {
  prepend?: string | React.Component | React.ReactElement;
  story?: Story;
  config?: object;
  storyType?: string;
  theme?: object;
  authors: Author[];
}
