import { Config } from "../../types/config";
import { Story } from "../../types/story";

export interface Iprops {
  story: Story;
  config: Config;
}

export interface Istate {
  showInvalidBanner: boolean;
}
