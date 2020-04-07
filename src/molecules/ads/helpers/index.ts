import get from "lodash.get";

export const getAdPropsFromConfig = ({ config, adName }) => get(config, ["ampConfig", "doubleclick", adName], null);
export const isEmpty = (obj: object) => Object.keys(obj).length === 0;
export const getDataSlotFromUnitPath = (adProps) => {
  const unitPath = get(adProps, "unit-path", null);
  if (unitPath) {
    delete adProps["unit-path"];
    adProps["data-slot"] = unitPath;
  }
  return adProps;
};

// export const getAdPropsFromConfig = ({ config, adName }) => get(config, ["ampConfig", "ads", adName], null);
//
// config = {  // in the future, this is how ads will be in the config
//   ampConfig: {
//     ...
//     ads: {
//       "top-ad": {
//         type: "industrybrains",
//         width: 300,
//         height: 250,
//         "data-width": "300",
//         "data-height": "250",
//         "data-cid": "19626-3798936394"
//       },
//       "bottom-ad": {
//         width: "320",
//         height: "50",
//         type: "doubleclick",
//         "data-slot": "/35096353/amptesting/formats/sticky"
//       }
//     },
//     ...
//   }
// }
