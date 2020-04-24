import { DefaultTheme, CSSObject } from "styled-components";

export interface DateTimeProps {
  dateTime: number | Date | null;
  formatString?: string;
  showTime?: boolean;
  style?: CustomStyles;
  theme?: DefaultTheme;
}

interface CustomStyles {
  author?: (theme) => CSSObject;
}
