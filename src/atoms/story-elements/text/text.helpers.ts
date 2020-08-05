import get from "lodash.get";
import { parse } from "node-html-parser";

export const conditionExternalLinks = ({ text, config }) => {
  // finds external links and adds rel=”nofollow” target="_blank" to them

  const sketchesHost = get(config, ["publisherConfig", "sketches-host"]);
  const escapedSketchesHost = escapeRegex(sketchesHost);
  const regex = new RegExp(`^((?!${escapedSketchesHost}).)*$`);
  const domTree = parse(text);
  const anchorsArr = domTree.querySelectorAll("a");
  let accumulator = text;
  anchorsArr.forEach((el) => {
    const href = el.rawAttributes.href;
    if (regex.test(href)) {
      const escapedHref = escapeRegex(href);
      accumulator = accumulator.replace(
        new RegExp(`href="${escapedHref}"`),
        `href="${href}" rel=”nofollow” target="_blank"`
      );
    }
  });
  return accumulator;
};

function escapeRegex(str: string) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
