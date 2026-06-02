import get from "lodash.get";
import { parse } from "node-html-parser";

export const conditionExternalLinks = ({ text, config }) => {
  // finds external links and adds target="_blank" to them (unless they already have a target set)
  // rel (nofollow/noopener) is never modified — it must be set explicitly by the editor in Bold CMS;

  const internalHosts: string[] = [];

  const sketchesHost = get(config, ["publisherConfig", "sketches-host"]);
  internalHosts.push(escapeRegex(sketchesHost));

  const domains = get(config, ["publisherConfig", "domains"], []);
  domains.forEach((domain) => {
    const hostUrl = get(domain, ["host-url"], null);
    if (hostUrl) internalHosts.push(escapeRegex(hostUrl));
  });

  const regex = new RegExp(`^((?!${internalHosts.join("|")}).)*$`);
  const domTree = parse(text);
  const anchorsArr = domTree.querySelectorAll("a");
  let accumulator = text;
  anchorsArr.forEach((el) => {
    const href = el.rawAttributes.href || null;
    const target = el.rawAttributes.target || null;
    if (href && !target && regex.test(href)) {
      const escapedHref = escapeRegex(href);
      accumulator = accumulator.replace(new RegExp(`href="${escapedHref}"`), `href="${href}" target="_blank"`);
    }
  });
  return accumulator;
};

function escapeRegex(str: string) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
