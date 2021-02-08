import React from "react";
import { shallow, mount } from "enzyme";
import { TableElement, TableElementBase } from "./table-element";
import { config, textStory } from "../../../__fixtures__";
import { Theme } from "../../../context/theme";
import { getTokensFromAMPConfig } from "../../../utils/theme";
import { CsvTable } from "./csv-table";

const sampleTableBase = {
  description: "",
  "page-url": "/story/9bddaf0a-40e1-4719-af26-4485802bb1a7/element/ffe5c576-53e5-4451-a0ae-6a817158f995",
  type: "data",
  "family-id": "d3fb204f-e4a1-435c-b8dd-c600c99d773a",
  title: "",
  id: "ffe5c576-53e5-4451-a0ae-6a817158f995",
  subtype: "table"
};
const sampleTableElement = {
  ...sampleTableBase,
  data: {
    content: "foo",
    "content-type": "csv"
  },
  metadata: {
    "file-name": "List of All BSNL Prepaid Plans - Sheet1-2.csv",
    "has-header": true
  }
};
const sampleTableElementWithUnknownContentType = {
  ...sampleTableBase,
  data: {
    content: "foo",
    "content-type": "someUnknownType"
  }
};

describe("Table Element", () => {
  it("should render table when present", () => {
    const tokens = getTokensFromAMPConfig(config.ampConfig);
    const wrapper = mount(
      <Theme tokens={tokens}>
        <TableElement element={sampleTableElement} />
      </Theme>
    );
    expect(wrapper.find(CsvTable).length).toBe(1);
  });
  it("should call tableElementRender prop when passed to opts", () => {
    const tableElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { tableElementRender } } } };
    const wrapper = shallow(
      <TableElementBase element={sampleTableElement} story={textStory} config={modifiedConfig} />
    );
    expect(tableElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find("table").length).toBe(0);
  });
  it("shouldn't render table element when tableContentType is content-type is unknown", () => {
    const wrapper = shallow(
      <TableElementBase element={sampleTableElementWithUnknownContentType} story={textStory} config={config} />
    );
    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
