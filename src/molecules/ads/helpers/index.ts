import get from "lodash.get";

export const getAdPropsFromConfig = ({ config, adName }) => get(config, ["ampConfig", "ads", adName], null);
export const isEmpty = (obj: object) => Object.keys(obj).length === 0;
