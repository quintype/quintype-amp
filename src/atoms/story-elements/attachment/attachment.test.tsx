import React from "react";
import { shallow } from "enzyme";
import { Attachment, AttachmentBase, PreviewLink } from "./attachment";

const sampleAttachmentElement = {
  description: "",
  "page-url": "/story/d66e8866-b815-4920-a79c-38e0b74c5b09/element/816fbbf8-e328-462e-aff3-484dd88d598d",
  type: "file",
  "family-id": "09572e29-b1f7-4026-a769-527a18c26cf0",
  title: "",
  id: "816fbbf8-e328-462e-aff3-484dd88d598d",
  "file-name":
    "Order of Honble CJ - Phased resumption of physical functioning of Courts at High Court of Gujarat -- Sd.pdf",
  url: "https://www.foo-bar/baz.pdf",
  "s3-key":
    "barandbench/2020-09/dfb40655-6bcb-428d-9869-6ffea81d9900/Order_of_Honble_CJ___Phased_resumption_of_physical_functioning_of_Courts_at_High_Court_of_Gujarat___.pdf",
  "content-type": "application/pdf",
  metadata: {
    "file-size": 365267
  },
  subtype: "attachment"
};

describe("Attachment", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Attachment element={sampleAttachmentElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should set correct attributes on anchor tag", () => {
    const wrapper = shallow(<AttachmentBase element={sampleAttachmentElement} />);
    expect(wrapper.find(PreviewLink).prop("href")).toBe("https://www.foo-bar/baz.pdf");
    expect(wrapper.find(PreviewLink).prop("target")).toBe("_blank");
    expect(wrapper.find(PreviewLink).prop("rel")).toBe("noopener noreferrer");
    expect(wrapper.find(PreviewLink).prop("download")).toBe("");
  });
});
