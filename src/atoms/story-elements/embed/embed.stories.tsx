import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Embed } from "./embed";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleJsEmbedElement = {
  description: "",
  "embed-js":
    "PGlmcmFtZSBoZWlnaHQ9IjI2NSIgc3R5bGU9IndpZHRoOiAxMDAlOyIgc2Nyb2xsaW5nPSJubyIgdGl0bGU9ImxpZ2h0IGJ1bGIiIHNyYz0iaHR0cHM6Ly9jb2RlcGVuLmlvL3ZsYWRpc3NsYXd3dy9lbWJlZC9wb2p2enFaP2hlaWdodD0yNjUmdGhlbWUtaWQ9ZGFyayZkZWZhdWx0LXRhYj1odG1sLHJlc3VsdCIgZnJhbWVib3JkZXI9Im5vIiBhbGxvd3RyYW5zcGFyZW5jeT0idHJ1ZSIgYWxsb3dmdWxsc2NyZWVuPSJ0cnVlIiBsb2FkaW5nPSJsYXp5Ij4KICBTZWUgdGhlIFBlbiA8YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vdmxhZGlzc2xhd3d3L3Blbi9wb2p2enFaJz5saWdodCBidWxiPC9hPiBieSB2bGFkaXNzbGF3dwogICg8YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vdmxhZGlzc2xhd3d3Jz5AdmxhZGlzc2xhd3d3PC9hPikgb24gPGEgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvJz5Db2RlUGVuPC9hPi4KPC9pZnJhbWU+",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/5bf7ba6d-9a51-41f2-b919-47539c4a5acd",
  type: "jsembed",
  "family-id": "f564d440-c969-4c35-9c5e-ddb032e22b05",
  title: "",
  id: "5bf7ba6d-9a51-41f2-b919-47539c4a5acd",
  metadata: {},
  subtype: null
};

storiesOf("Embed", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("JsEmbed with iframe", () => <Embed element={sampleJsEmbedElement} />);
