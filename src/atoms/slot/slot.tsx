import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { SlotType } from "../../types/config";

export const Slot = ({ ampHtml, script, styles }: SlotType) => {
  const headScript = getHeadScript(script);
  return (
    <Fragment>
      <Helmet>
        {headScript}
        <style>{styles}</style>
      </Helmet>
      <div dangerouslySetInnerHTML={createMarkup(ampHtml)} />
    </Fragment>
  );
};

function createMarkup(ampHtml) {
  return { __html: ampHtml };
}

function getHeadScript(script) {
  // script can either be null, a single object or an array of type SlotScriptTypes
  if (!script) {
    return null;
  } else if (Array.isArray(script)) {
    return script.map(({ customElement, src, customTemplate }, i) => {
      const propsForScript = getScriptProps({ customElement, src, customTemplate });
      return <script key={i} {...propsForScript} />;
    });
  } else {
    const { customElement, src, customTemplate } = script;
    const propsForScript = getScriptProps({ customElement, src, customTemplate });
    return <script {...propsForScript} />;
  }
}

function getScriptProps({ customElement, src, customTemplate }) {
  const propsForScript = {
    async: undefined,
    src
  };
  if (!!customElement) propsForScript["custom-element"] = customElement;
  if (!!customTemplate) propsForScript["custom-template"] = customTemplate;
  return propsForScript;
}
