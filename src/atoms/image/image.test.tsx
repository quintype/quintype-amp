import React from "react";
import { shallow } from "enzyme";
import { BaseImage } from "./image";
import { config } from "../../__fixtures__";
import { LightboxGallery } from "../lightbox-gallery";
import { base64FallbackImage } from "../../helpers/image-helpers";

describe("Image", () => {
  const metadata = {
    width: 5472,
    height: 3648,
    "mime-type": "image/jpeg",
    "file-size": 6127839,
    "file-name": "LSAC Launches New Initiatives to Support Law School Enrollment Efforts in India.JPG",
    "focus-point": [2609, 1102]
  };
  const s3key =
    "barandbench/2020-01/0329b37d-5ec6-4bb4-b16f-2009bbaf13c9/LSAC_Launches_New_Initiatives_to_Support_Law_School_Enrollment_Efforts_in_India.JPG";

  it("should render fixed-height layout", () => {
    const wrapper = shallow(
      <BaseImage
        alt="Sample Image"
        layout={"fixed-height"}
        metadata={metadata}
        slug={s3key}
        aspectRatio={[0, 100]}
        config={config}
      />
    );
    expect(wrapper.find(`amp-img`).prop("width")).toBeUndefined();
    expect(wrapper.find(`amp-img`).prop("height")).toBe("100");
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("fixed-height");
  });
  it("should render fixed layout", () => {
    const wrapper = shallow(
      <BaseImage
        alt="Sample Image"
        config={config}
        layout="fixed"
        metadata={metadata}
        slug={s3key}
        aspectRatio={[500, 500]}
      />
    );
    expect(wrapper.find(`amp-img`).prop("width")).toBe("500");
    expect(wrapper.find(`amp-img`).prop("height")).toBe("500");
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("fixed");
  });
  it("should render intrinsic layout", () => {
    const wrapper = shallow(
      <BaseImage
        alt="Sample Image"
        config={config}
        layout="intrinsic"
        metadata={metadata}
        slug={s3key}
        aspectRatio={[500, 500]}
      />
    );
    expect(wrapper.find(`amp-img`).prop("width")).toBe("500");
    expect(wrapper.find(`amp-img`).prop("height")).toBe("500");
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("intrinsic");
  });
  it("should render nodisplay layout", () => {
    const wrapper = shallow(
      <BaseImage alt="Sample Image" config={config} layout="nodisplay" metadata={metadata} slug={s3key} />
    );
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("nodisplay");
    expect(wrapper.find(`amp-img`).prop("width")).toBeUndefined();
    expect(wrapper.find(`amp-img`).prop("height")).toBeUndefined();
  });
  it("should render responsive layout by default and set width, height from aspectRatio if passed", () => {
    const wrapper = shallow(
      <BaseImage metadata={metadata} slug={s3key} alt="Sample Image" config={config} aspectRatio={[21, 9]} />
    );
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("responsive");
    expect(wrapper.find(`amp-img`).prop("width")).toBe("21");
    expect(wrapper.find(`amp-img`).prop("height")).toBe("9");
  });
  it("should set width, height from metadata if aspectRatio is not passed", () => {
    const wrapper = shallow(<BaseImage metadata={metadata} slug={s3key} alt="Sample Image" config={config} />);
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("responsive");
    expect(wrapper.find(`amp-img`).prop("width")).toBe(metadata.width.toString());
    expect(wrapper.find(`amp-img`).prop("height")).toBe(metadata.height.toString());
  });
  it("should render with fallback aspect ratio of 16:9 if aspectRatio and metadata are not given", () => {
    const wrapper = shallow(<BaseImage alt="abc" config={config} slug={s3key} metadata={null} />);
    expect(wrapper.find(`amp-img`).prop("width")).toBe("16");
    expect(wrapper.find(`amp-img`).prop("height")).toBe("9");
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("responsive");
  });
  it("should render fallback image if slug is falsy and useFallbackImage is true", () => {
    const wrapper = shallow(<BaseImage alt="abc" config={config} slug="" metadata={null} useFallbackImage={true} />);
    expect(wrapper.find(`amp-img`).prop("width")).toBe("16");
    expect(wrapper.find(`amp-img`).prop("height")).toBe("9");
    expect(wrapper.find(`amp-img`).prop("layout")).toBe("responsive");
    expect(wrapper.find(`amp-img`).prop("alt")).toBe("fallback image");
    expect(wrapper.find(`amp-img`).prop("src")).toBe(base64FallbackImage);
    expect(wrapper.find(`amp-img`).prop("srcset")).toBeUndefined();
  });
  it("should not render if slug is falsy and useFallbackImage is not passed", () => {
    const wrapper = shallow(<BaseImage alt="abc" config={config} slug="" metadata={null} />);
    expect(wrapper.find(`amp-img`).exists()).toBeFalsy();
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
  it("Should pass on remaining attributes to amp-img", () => {
    const wrapper = shallow(
      <BaseImage metadata={metadata} slug={s3key} alt="Sample Image" config={config} data-foo="bar" />
    );
    expect(wrapper.find("amp-img").prop("data-foo")).toBe("bar");
  });
});
