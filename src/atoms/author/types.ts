import { Author } from "../../types/story";

export interface AuthorProps {
  authors: Author[];
  prepend?: string | React.Component | React.ReactElement;
  inlineStyles?: object;
}
