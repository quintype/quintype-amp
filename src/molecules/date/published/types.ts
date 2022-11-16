import { Config } from "../../../types/config";
import { Story } from "../../../types/story";

export interface DatePublishedTypes {
  story: Story;
  format?: string;
  prepend?: string | JSX.Element | JSX.Element[];
  config?: Config;
  type?: "last" | "first";
}
