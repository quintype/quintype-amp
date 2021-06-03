import { Story } from "./../../../types/story";
import { Card } from "../../../types/story";
import { Config } from "../../../types/config";

export interface WebStoryPageComponentsTypes {
  card: Card;
  config: Config;
  story: Story;
}
export interface AnimationTypes {
  imageAnimation?: object;
  textAnimation?: object;
}
