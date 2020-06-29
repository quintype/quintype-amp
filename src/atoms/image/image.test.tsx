import React from "react";
import { shallow } from "enzyme";
import { BaseImage } from "./image";
import get from "lodash.get";
import { textStory, config } from "../../__fixtures__";
import { LightboxGallery } from "../lightbox-gallery";

describe("Image", () => {
  const metadata = get(textStory, "hero-image-metadata");
  const s3key = get(textStory, "hero-image-s3-key");
  const aspectRatio = [16, 9];

  it("should render amp img with src", () => {
    const wrapper = shallow(
      <BaseImage alt="Sample Image" metadata={metadata} slug={s3key} aspectRatio={aspectRatio} config={config} />
    );
    expect(wrapper.find("amp-img").length).toBe(1);
  });
  it("should render fixed-height layout", () => {
    const wrapper = shallow(
      <BaseImage
        alt="Sample Image"
        layout={"fixed-height"}
        metadata={metadata}
        slug={s3key}
        aspectRatio={aspectRatio}
        height={"100"}
        config={config}
      />
    );
    expect(wrapper.find(`amp-img`).prop("height")).toBe("100");
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("fixed-height");
  });
  it("should render fixed layout", () => {
    const wrapper = shallow(
      <BaseImage
        alt="Sample Image"
        config={config}
        layout={"fixed"}
        metadata={metadata}
        slug={s3key}
        aspectRatio={aspectRatio}
        // width={"500"}
        height={"500"}
      />
    );
    expect(wrapper.find(`amp-img`).prop("height")).toBe("500");
    // expect(wrapper.find(`amp-img`).prop("width")).toBe("500");
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("fixed");
  });
  it("should render nodisplay layout", () => {
    const wrapper = shallow(
      <BaseImage
        alt="Sample Image"
        config={config}
        layout={"nodisplay"}
        metadata={metadata}
        slug={s3key}
        aspectRatio={aspectRatio}
      />
    );
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("nodisplay");
  });
  it("should render responsive layout by default and set width, height from metadata", () => {
    const wrapper = shallow(<BaseImage metadata={metadata} slug={s3key} alt="Sample Image" config={config} />);
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("responsive");
    // expect(wrapper.find(`amp-img`).prop("width")).toBe(metadata.width.toString());
    expect(wrapper.find(`amp-img`).prop("height")).toBe(metadata.height.toString());
  });
  it("Should add lightbox attribute and amp-lightbox-gallery script by default", () => {
    const wrapper = shallow(<BaseImage metadata={metadata} slug={s3key} alt="Sample Image" config={config} />);
    expect(wrapper.find(`amp-img`).prop("lightbox")).toBe(true);
    expect(wrapper.find(LightboxGallery).exists()).toBeTruthy();
  });
  it("Should add lightbox attribute with custom value if provided", () => {
    const wrapper = shallow(
      <BaseImage metadata={metadata} slug={s3key} alt="Sample Image" config={config} lightbox="foo" />
    );
    expect(wrapper.find(`amp-img`).prop("lightbox")).toBe("foo");
    expect(wrapper.find(LightboxGallery).exists()).toBeTruthy();
  });
  it("Should not add lightbox attribute on amp-img and LightboxGallery script if lightbox attribute is falsy", () => {
    const wrapper = shallow(
      <BaseImage metadata={metadata} slug={s3key} alt="Sample Image" config={config} lightbox={false} />
    );
    expect(wrapper.find(`amp-img`).prop("lightbox")).toBeFalsy();
    expect(wrapper.find(LightboxGallery).exists()).toBeFalsy();
  });
});
