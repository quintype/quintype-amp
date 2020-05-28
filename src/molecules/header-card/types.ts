import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface HeaderCardTypes {
  story: Story;
  config: Config;
}
export interface GetHeaderComponentHelperTypes {
  componentName: string;
  config: Config;
}
