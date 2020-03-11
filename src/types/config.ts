export interface Config {
  cdn_image: string;
  theme: ThemeConfig;
  text_direction?: string;
}

interface ThemeConfig {
  fonts: Fonts;
  colors: Colors;
}

interface Colors {
  primary: string;
  secondary: string;
  "footer-background": string;
  "footer-text-color": string;
  "header-background": string;
  "section-text-color": string;
}

interface Fonts {
  primary: FontItem;
  secondary: FontItem;
}

interface FontItem {
  url: string;
  family: string;
}
