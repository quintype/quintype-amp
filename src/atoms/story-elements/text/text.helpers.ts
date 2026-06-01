import get from "lodash.get";
import { parse } from "node-html-parser";

export const conditionExternalLinks = ({ text, config }) => {
  // finds external links and adds target="_blank" to them if not already set

  const internalHosts: string[] = [];

  const sketchesHost = get(config, ["publisherConfig", "sketches-host"]);
  if (sketchesHost) {
    internalHosts.push(escapeRegex(sketchesHost));
    const wwwVariant = getWwwVariant(sketchesHost);
    if (wwwVariant) internalHosts.push(escapeRegex(wwwVariant));
  }

  const domains = get(config, ["publisherConfig", "domains"], []);
  domains.forEach((domain) => {
    const hostUrl = get(domain, ["host-url"], null);
    if (hostUrl) {
      internalHosts.push(escapeRegex(hostUrl));
      const wwwVariant = getWwwVariant(hostUrl);
      if (wwwVariant) internalHosts.push(escapeRegex(wwwVariant));
    }
  });

  if (internalHosts.length === 0) return text;

  const regex = new RegExp(`^((?!${internalHosts.join("|")}).)*$`);
  const domTree = parse(text);
  const anchorsArr = domTree.querySelectorAll("a");
  let accumulator = text;
  anchorsArr.forEach((el) => {
    const href = el.rawAttributes.href || null;
    const target = el.rawAttributes.target || null;
    if (href && regex.test(href) && !target) {
      const escapedHref = escapeRegex(href);
      accumulator = accumulator.replace(
        new RegExp(`href="${escapedHref}"`),
        `href="${href}" target="_blank"`
      );
    }
  });
  return accumulator;
};

function escapeRegex(str: string) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function getWwwVariant(host: string): string | null {
  try {
    const url = new URL(host);
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
    } else {
      url.hostname = "www." + url.hostname;
    }
    return url.origin;
  } catch {
    return null;
  }
}
