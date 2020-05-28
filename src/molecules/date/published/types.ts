import { Story } from "../../../types/story";

export interface DateLastPublishedTypes {
  story: Story;
  format?: string;
  prepend?: string | JSX.Element | JSX.Element[];
}
