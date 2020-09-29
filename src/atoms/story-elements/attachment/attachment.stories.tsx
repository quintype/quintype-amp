import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Attachment } from "./attachment";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleAttachmentElement = {
  description: "",
  "page-url": "/story/d66e8866-b815-4920-a79c-38e0b74c5b09/element/816fbbf8-e328-462e-aff3-484dd88d598d",
  type: "file",
  "family-id": "09572e29-b1f7-4026-a769-527a18c26cf0",
  title: "",
  id: "816fbbf8-e328-462e-aff3-484dd88d598d",
  "file-name":
    "Order of Honble CJ - Phased resumption of physical functioning of Courts at High Court of Gujarat -- Sd.pdf",
  url:
    "https://images.assettype.com/barandbench/2020-09/dfb40655-6bcb-428d-9869-6ffea81d9900/Order_of_Honble_CJ___Phased_resumption_of_physical_functioning_of_Courts_at_High_Court_of_Gujarat___.pdf",
  "s3-key":
    "barandbench/2020-09/dfb40655-6bcb-428d-9869-6ffea81d9900/Order_of_Honble_CJ___Phased_resumption_of_physical_functioning_of_Courts_at_High_Court_of_Gujarat___.pdf",
  "content-type": "application/pdf",
  metadata: {
    "file-size": 365267
  },
  subtype: "attachment"
};

storiesOf("Attachment", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Attachment element={sampleAttachmentElement} />);
