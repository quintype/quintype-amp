import get from "lodash.get";
import { GetHeaderComponentHelperTypes } from "./types";

export const getHeaderComponentConfig = ({ componentName, config }: GetHeaderComponentHelperTypes) => {
  const components = get(config, ["opts", "headerCardConfig", "components"], []);
  const match = components.find((component) => component.name.toLowerCase() === componentName);
  if (!match)
    throw new Error(`Error in "getHeaderComponentConfig" function. Could not find "${componentName}" in config`);
  return match.config;
};
