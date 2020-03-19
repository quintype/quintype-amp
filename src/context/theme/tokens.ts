const colors = {
  white: "#FFF",
  black: "#0d0d0d",

  brand1: "#b80002",
  brand2: "#fff9f9",
  brand3: "#4860bc",
  brand4: "#f6f8ff",

  accent1: "#2fd072",
  accent2: "#f5a623",
  accent3: "#ff214b",

  mono1: "#f9f9f9",
  mono2: "#e9e9e9",
  mono3: "#d1d1d1",
  mono4: "#797979",
  mono5: "#636363",
  mono6: "333333",
  mono7: "0d0d0d"
};

const font = {
  family: {
    systemFont: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
    primary: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
    secondary: "Verdana, Geneva, Tahoma, sans-serif"
  },

  size: {
    xxs: "14px",
    xs: "16px",
    s: "18px",
    m: "20px",
    l: "24px",
    xl: "26px",
    xxl: "30px",
    huge: "32px",
    big: "40px",
    jumbo: "54px"
  },

  weight: {
    light: "300",
    normal: "400",
    semiBold: "600",
    bold: "700"
  },

  lineHeight: {
    level1: 1,
    level2: 1.2,
    level3: 1.3,
    level4: 1.4,
    level5: 1.5
  }
};

const spacing = {
  xxs: "4px",
  xs: "8px",
  s: "12px",
  m: "16px",
  l: "24px",
  xl: "32px",
  xxl: "40px",
  huge: "48px"
};

const zIndex = {
  negativeZ1: -1,
  z1: 1,
  z100: 100,
  z200: 200,
  z300: 300,
  z600: 600,
  z700: 700,
  z800: 800,
  z900: 900,
  z1000: 1000
};

const colorVariables = {
  primaryColor: colors.brand1,
  secondaryColor: colors.brand2,
  headerBackground: colors.brand1,
  footerBackground: colors.brand1,
  footerTextColor: colors.mono2,
  sectionTextColor: colors.mono2
};

const tokens = {
  color: { ...colors, ...colorVariables },
  font,
  spacing,
  zIndex
};

export default tokens;
