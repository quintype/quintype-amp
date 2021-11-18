import React from "react";
import { HamburgerMenu } from "./hamburger-menu";
import { StyledAnchor } from "./presentational-components";
import { mount, shallow } from "enzyme";
import { Layout } from "../layout";
import { textStory, config } from "../../__fixtures__";

describe("HamburgerMenu", () => {
  it("should render", () => {
    const wrapper = shallow(<HamburgerMenu items={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render menu items", () => {
    const dummyMenuItems = [
      {
        "tag-name": "women empowerment",
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": 1099957,
        rank: 4689,
        title: "foo",
        "item-type": "tag",
        "section-slug": null,
        "tag-slug": "women-empowerment",
        id: 4689,
        "parent-id": null,
        url: "bar",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: {
          color: "#FFFFFF"
        }
      },
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": 96306,
        "entity-slug": null,
        "item-id": 43290,
        rank: 9183,
        title: "Podcasts",
        "item-type": "section",
        "section-slug": "podcast-new",
        "tag-slug": null,
        id: 9183,
        "parent-id": null,
        url: "https://newslaundry-web.qtstage.io/podcast-new",
        "entity-name": null,
        "collection-slug": "podcast-new",
        "section-name": "podcast new",
        data: {
          color: "#d8a86b"
        }
      }
    ];
    const Component = () => (
      <Layout story={textStory} config={config}>
        <HamburgerMenu items={dummyMenuItems} />
      </Layout>
    );
    const wrapper = mount(<Component />);
    wrapper.find(StyledAnchor).forEach((node, idx) => {
      switch (idx) {
        case 0:
          expect(node.prop("href")).toBe("bar");
          expect(node.text()).toBe("foo");
          break;
        case 1:
          expect(node.prop("href")).toBe("https://newslaundry-web.qtstage.io/podcast-new");
          expect(node.text()).toBe("Podcasts");
          break;
      }
    });
  });
});
