import { Story } from "../../../types/story";
import { Config } from "../../../types/config";

export interface WebStoryTypes {
  children: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
  story: Story;
  config: Config;
}
