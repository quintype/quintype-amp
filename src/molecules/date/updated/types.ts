import { Config } from "../../../types/config";
import { Story } from "../../../types/story";

export interface DateUpdatedTypes {
  story: Story;
  prepend?: string;
  config?: Config;
}
