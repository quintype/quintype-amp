import React, { useContext } from "react";
import { ConfigContext } from "./config-context";

const withConfig = (BaseComponent) => (props) => {
  const configFromContext = useContext(ConfigContext);
  return <BaseComponent config={configFromContext} {...props} />;
};

export { withConfig };
