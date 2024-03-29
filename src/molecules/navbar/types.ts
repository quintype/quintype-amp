import { Config } from "../../types/config";
import { DefaultTheme } from "styled-components";

export interface NavbarTypes {
  config: Config;
  theme?: DefaultTheme;
}
