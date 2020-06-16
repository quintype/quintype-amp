import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface InfiniteScrollTypes {
  story: Story;
  config: Config;
  children?: JSX.Element[] | JSX.Element;
}
