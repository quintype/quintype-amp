import { Config } from "../../../types/config";
import { Story, Card } from "../../../types/story";

export interface AmpStoryPageTypes {
  config: Config;
  story: Story;
  id: string;
  card: Card;
  children: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
  "auto-advance-after"?: string;
}
