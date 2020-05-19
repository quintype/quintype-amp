import { Config } from "../../types/config";
import { Story } from "../../types/story";

export interface WebEngageTypes {
  config: Config;
  story: Story;
  buttonText?: string;
  width?: string;
  height?: string;
  visibility?: "unsubscribed" | "subscribed" | "blocked";
}
