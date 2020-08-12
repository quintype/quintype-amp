import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface LiveListTypes {
  story: Story;
  config: Config;
  children: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
}

export interface LiveListAttrs {
  "data-poll-interval": string;
  "data-max-items-per-page": string;
  disabled?: string;
}
