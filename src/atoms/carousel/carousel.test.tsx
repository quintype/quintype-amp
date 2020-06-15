import React from "react";
import { mount } from "enzyme";
import { Carousel } from "./carousel";

const sampleImages = (
  <>
    <amp-img
      src="https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      width="400"
      height="300"
      alt="a sample image"></amp-img>
    <amp-img
      src="https://images.unsplash.com/photo-1581793111741-04b7034d1cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      width="400"
      height="300"
      alt="another sample image"></amp-img>
    <amp-img
      src="https://images.unsplash.com/photo-1581911705179-8e5221e6be29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      width="400"
      height="300"
      alt="another sample image"></amp-img>
  </>
);
describe("Carousel", () => {
  it("should render images in carousel", () => {
    const wrapper = mount(
      <Carousel height="300" width="500" layout="responsive" type="slides">
        {sampleImages}
      </Carousel>
    );
    expect(wrapper.find("amp-carousel").length).toBe(1);
  });
  it("should render carousel images with width and height", () => {
    const wrapper = mount(
      <Carousel height="300" width="500" layout="responsive" type="slides">
        {sampleImages}
      </Carousel>
    );
    expect(wrapper.find("amp-carousel").prop("width")).toBe("500");
    expect(wrapper.find("amp-carousel").prop("height")).toBe("300");
    expect(wrapper.find("amp-carousel").prop("layout")).toBe("responsive");
  });
  it("should render carousel with lightbox images", () => {
    const wrapper = mount(
      <Carousel height="300" width="500" layout="responsive" type="carousel" lightbox={true}>
        {sampleImages}
      </Carousel>
    );
    expect(wrapper.find("amp-carousel").prop("type")).toBe("carousel");
    expect(wrapper.find("amp-carousel").prop("width")).toBe("500");
    expect(wrapper.find("amp-carousel").prop("height")).toBe("300");
    expect(wrapper.find("amp-carousel").prop("layout")).toBe("responsive");
    expect(wrapper.find("amp-carousel").prop("lightbox")).toBe(true);
  });
  it("should render carousel with custom styles", () => {
    const wrapper = mount(<Carousel inlineStyles={{ border: "2px solid black" }} type="slides"></Carousel>);
    expect(wrapper.find("div").prop("style")).toStrictEqual({ border: "2px solid black" });
  });
  it("shouldn't render images", () => {
    const wrapper = mount(<Carousel height="300" width="500" layout="responsive" type="slides"></Carousel>);
    expect(wrapper.find("amp-img").length).toBe(0);
  });
});
