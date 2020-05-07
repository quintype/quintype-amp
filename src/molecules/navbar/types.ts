import { Config } from "../../types/config";
import { DefaultTheme } from "styled-components";

export interface NavbarTypes {
  config: Config;
  logoSrc?: string;
  align?: "left" | "right";
  theme?: DefaultTheme;
}
