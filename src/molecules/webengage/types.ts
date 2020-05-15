import { Config } from "../../types/config";

export interface WebEngageTypes {
  config: Config;
  buttonText?: string;
  width?: string;
  height?: string;
  visibility?: "unsubscribed" | "subscribed" | "blocked";
}
