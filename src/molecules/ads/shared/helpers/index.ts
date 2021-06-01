import get from "lodash.get";
import cloneDeep from "lodash.clonedeep";

export const isEmpty = (obj: object) => Object.keys(obj).length === 0;

export const getPropsForDfpAd = ({ overridingProps, config, adName }) => {
  if (!isEmpty(overridingProps)) return overridingProps;

  const clone = cloneDeep(config);
  const adPropsFromConfig = get(clone, ["ampConfig", "doubleclick", adName], null);
  const unitPath = get(adPropsFromConfig, "unit-path", null);

  if (!adPropsFromConfig || !unitPath) return null;

  adPropsFromConfig["data-slot"] = unitPath; // renames unit-path to data-slot
  delete adPropsFromConfig["unit-path"];
  return adPropsFromConfig;
};
