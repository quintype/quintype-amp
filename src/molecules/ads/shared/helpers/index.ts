import get from "lodash.get";
import cloneDeep from "lodash.clonedeep";

const isEmpty = (obj: object) => Object.keys(obj).length === 0;

export const getPropsForDfpAd = ({ overridingProps, config, adName }) => {
  if (isEmpty(overridingProps)) {
    const clone = cloneDeep(config);
    const adPropsFromConfig = get(clone, ["ampConfig", "doubleclick", adName], null);
    const unitPath = get(adPropsFromConfig, "unit-path", null);

    if (!adPropsFromConfig) throw new Error(`No props defined for ${adName} in config`);
    if (!unitPath) throw new Error(`unit-path not defined for ad ${adName} in config`);
    adPropsFromConfig["data-slot"] = unitPath; // renames unit-path to data-slot
    delete adPropsFromConfig["unit-path"];
    return adPropsFromConfig;
  } else return overridingProps;
};
