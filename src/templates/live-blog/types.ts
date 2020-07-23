import { Story, Card } from "../../types/story";
import { Config } from "../../types/config";

export interface CardUpdatedAtTypes {
  story: Story;
  config: Config;
  timeStamp: number | Date;
  card: Card;
}
