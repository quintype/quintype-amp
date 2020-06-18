import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface InfiniteScrollTypes {
  story: Story;
  config: Config;
  inlineConfig: string;
  children?: JSX.Element[] | JSX.Element;
}
