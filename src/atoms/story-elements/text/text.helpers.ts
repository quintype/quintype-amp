import get from "lodash.get";
import { parse } from "node-html-parser";

export const conditionExternalLinks = ({ text, config }) => {
  const internalHosts: string[] = [];

  const sketchesHost = get(config, ["publisherConfig", "sketches-host"]);
  internalHosts.push(escapeRegex(sketchesHost));

  const domains = get(config, ["publisherConfig", "domains"], []);
  domains.forEach((domain) => {
    const hostUrl = get(domain, ["host-url"], null);
    if (hostUrl) internalHosts.push(escapeRegex(hostUrl));
  });

  const disableRelNoFollow = get(config, ["opts", "featureConfig", "disableRelNoFollow"], false);
  const relNoFollowAttr = disableRelNoFollow ? "" : `rel="nofollow noopener"`;

  const regex = new RegExp(`^((?!${internalHosts.join("|")}).)*$`);
  const domTree = parse(text);
  const anchorsArr = domTree.querySelectorAll("a");
  let accumulator = text;
  anchorsArr.forEach((el) => {
    const href = el.rawAttributes.href || null;
    const hasTarget = el.rawAttributes.target !== undefined;
    if (href && regex.test(href)) {
      const escapedHref = escapeRegex(href);
      const targetAttr = hasTarget ? "" : 'target="_self"';
      accumulator = accumulator.replace(
        new RegExp(`href="${escapedHref}"`),
        `href="${href}" ${relNoFollowAttr} ${targetAttr}`.trim()
      );
    }
  });
  accumulator = accumulator.replace(/\s+target\s*=\s*(["'])\s*\1/gi, "");
  return accumulator;
};

function escapeRegex(str: string) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
