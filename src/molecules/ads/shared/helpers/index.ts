import get from "lodash.get";
import cloneDeep from "lodash.clonedeep";

export const isEmpty = (obj: object) => Object.keys(obj).length === 0;

export const getPropsForDfpAd = ({ overridingProps, config, adSlot = {}, adName }) => {
  if (!isEmpty(overridingProps)) return overridingProps;

  // If adSlot is provided, use it (for dynamic ad slots)
  if (!isEmpty(adSlot)) {
    const unitPath = adSlot?.["unit-path"];
    if (!unitPath) return null;

    const slotClone = cloneDeep(adSlot);
    slotClone["data-slot"] = unitPath; // renames unit-path to data-slot
    delete slotClone["unit-path"];
    return slotClone;
  }

  // Otherwise, get props from config using adName
  const clone = cloneDeep(config);
  const adPropsFromConfig = get(clone, ["ampConfig", "doubleclick", adName], null);
  const unitPath = get(adPropsFromConfig, "unit-path", null);

  if (!adPropsFromConfig || !unitPath) return null;

  adPropsFromConfig["data-slot"] = unitPath; // renames unit-path to data-slot
  delete adPropsFromConfig["unit-path"];
  return adPropsFromConfig;
};
