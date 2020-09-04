const breakpoints = {
  desktop: "961px"
};

export const media = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string) => `@media (min-width: ${breakpoints[key]}) { ${style} }`;
};
