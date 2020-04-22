import { Common } from "../common-types";

export interface DailyMotionTypes extends Common {
  "data-videoid": string;
  "data-mute"?: string;
  "data-endscreen-enable"?: string;
  "data-sharing-enable"?: string;
  "data-start"?: string;
  "data-ui-highlight"?: string;
  "data-ui-logo"?: string;
  "data-info"?: string;
  dock?: boolean;
  autoplay?: boolean;
}
