import React from "react";
import { mount } from "enzyme";
import { ImageGalleryElement } from "./image-gallery-element";

const sampleImageGalleryElement = {
  description: "",
  "page-url": "/story/6c98ba9e-0224-4cba-97d0-83b44e551080/element/6840b851-dce3-43cf-b346-e466a1be3b70",
  type: "composite",
  "family-id": "cbfd49db-f890-42e3-a964-665d41f77a82",
  "story-elements": [
    {
      description: "",
      "image-metadata": {
        width: 3037,
        height: 1920,
        "focus-point": [1519, 960]
      },
      type: "image",
      "family-id": "adaf9d7c-ce22-4a99-929f-e86438ccbefc",
      "image-attribution": "football",
      title: "football",
      id: "bbc046b4-bb82-42cc-83a0-c7ecccdd8d9b",
      "image-s3-key":
        "ace/2020-05/a9d04bce-56a1-4dea-8694-6e291db7a529/LEWANDOW059746243_LR2EB9M1I218R_RTRMADP_3_GERMNY_SOCCER_1_.JPG",
      metadata: {},
      subtype: null
    },
    {
      description: "",
      "image-metadata": {
        width: 1280,
        height: 720,
        "focus-point": [640, 360]
      },
      type: "image",
      "family-id": "fbc7e8a8-7271-42b7-9fe4-782b08b972bd",
      "image-attribution": "Buildings",
      title: "Huge Buildings",
      id: "6ee8af2b-cb2d-4579-9022-3cc8a7045a5d",
      "image-s3-key": "ace/2020-05/097d3bf3-693e-43af-901f-d8458aae1343/Durham_Austin_iStock.jpg",
      metadata: {},
      subtype: null
    },
    {
      description: "",
      "image-metadata": {
        width: 1484,
        height: 835,
        "focus-point": [742, 418]
      },
      type: "image",
      "family-id": "f0d9b52c-94b9-445a-b882-e35c0790fa85",
      "image-attribution": "",
      title: "Wallpaper",
      id: "bfdf590b-3097-481f-81c6-e5288b8429a7",
      "image-s3-key": "ace/2020-05/35544a89-4eea-4040-973b-450b7194f1bc/JGYSQ7JERZBZVIBL7RHVOXSKQI.png",
      metadata: {},
      subtype: null
    },
    {
      description: "",
      "image-metadata": {
        width: 1140,
        height: 641,
        "focus-point": [570, 321]
      },
      type: "image",
      "family-id": "ca763477-e17b-4360-ae05-4dd6123e9586",
      "image-attribution": "",
      title: "Flag",
      id: "0acd7945-3440-48a2-b47c-2b22830bd7b4",
      "image-s3-key":
        "ace/2020-05/c03eeadb-54f8-418a-ad34-6c3e8bee0004/14a3c7aa_791a_4ccf_bf0d_a1532c508c46_1140x641.jpg",
      metadata: {},
      subtype: null
    },
    {
      description: "",
      "image-metadata": {
        width: 5200,
        height: 3472,
        "focus-point": [2652, 1487]
      },
      type: "image",
      "family-id": "57e1a187-e5f2-4674-8038-bd3ae85b2d77",
      "image-attribution": "",
      title: "",
      id: "e35ff882-1dbd-41d7-b59d-f141bd595b75",
      "image-s3-key":
        "ace/2020-05/ea17ec96-81cf-435f-97c6-bdf3fcc33cd8/2020_05_10T220259Z_1240337357_RC2ULG9IPO5H_RTRMADP_3_HEALTH_CORONAVIRUS_BRITAIN_JOHNSON.JPG",
      metadata: {},
      subtype: null
    },
    {
      description: "",
      "image-metadata": {
        width: 1440,
        height: 960,
        "focus-point": [720, 480]
      },
      type: "image",
      "family-id": "92dc70ed-a851-404e-9232-98d86e4cc923",
      "image-attribution": "",
      title: "",
      id: "79f2bad2-d299-4f01-9394-1d12009f82a5",
      "image-s3-key": "ace/2020-05/6451e3d3-8e7e-41bb-a7fa-26df0018056d/BJCEPXUQVII6VKOAOO4TIIWWSE.jpg",
      metadata: {},
      subtype: null
    },
    {
      description: "",
      "image-metadata": {
        width: 1140,
        height: 641,
        "focus-point": [570, 321]
      },
      type: "image",
      "family-id": "76c46e73-2fd2-44fb-b8da-9af41c7cb129",
      "image-attribution": "",
      title: "",
      id: "02d71172-6324-4894-a4ed-95f1d47aa18f",
      "image-s3-key":
        "ace/2020-05/d233ded8-9e98-4156-a2c6-43b97256164d/7e2b0e40_50b4_4d54_b550_7a7662b0842f_1140x641.jpg",
      metadata: {},
      subtype: null
    },
    {
      description: "",
      "image-metadata": {
        width: 1400,
        height: 787,
        "focus-point": [700, 394]
      },
      type: "image",
      "family-id": "997f9133-d6a4-4f67-bea6-f3da11072737",
      "image-attribution": "",
      title: "",
      id: "56137c4f-f6c5-4362-a978-f4fd066c0dc1",
      "image-s3-key":
        "ace/2020-05/59d8f44e-153a-41d1-a002-db0ed876327c/gettyimages_1211277548_wide_7def4a4c352e1ec820cd8a0384526a847797b67d.jpg",
      metadata: {},
      subtype: null
    }
  ],
  title: "",
  id: "6840b851-dce3-43cf-b346-e466a1be3b70",
  metadata: {
    type: "gallery"
  },
  subtype: "image-gallery"
};

const {
  "story-elements": [],
  ...sampleImageGalleryElementWithoutStoryelements
} = sampleImageGalleryElement;

const sampleImageGalleryElementWithSlideshow = {
  ...sampleImageGalleryElement,
  metadata: { ...sampleImageGalleryElement.metadata, type: "slideshow" }
};
const {
  "story-elements": [],
  ...sampleImageSlideshowWithoutStoryelements
} = sampleImageGalleryElementWithSlideshow;

describe("Image Gallery Element", () => {
  it("should render Image Gallery", () => {
    const wrapper = mount(<ImageGalleryElement element={sampleImageGalleryElement} />);
    expect(wrapper.find("div").length).toBe(1);
  });
  it("should render Image Gallery with width and height", () => {
    const wrapper = mount(<ImageGalleryElement element={sampleImageGalleryElement} width="1200" height="750" />);
    expect(wrapper.find("div").prop("width")).toBe("1200");
    expect(wrapper.find("div").prop("height")).toBe("750");
  });
  it("shouldn't render Image Gallery", () => {
    const wrapper = mount(<ImageGalleryElement element={sampleImageGalleryElementWithoutStoryelements} />);
    expect(wrapper.find("div").length).toBe(0);
  });
  it("should render Image Slideshow", () => {
    const wrapper = mount(<ImageGalleryElement element={sampleImageGalleryElementWithSlideshow} />);
    expect(wrapper.find("amp-carousel").length).toBe(1);
  });
  it("should render Image Slideshow with width and height", () => {
    const wrapper = mount(
      <ImageGalleryElement element={sampleImageGalleryElementWithSlideshow} width="1200" height="750" />
    );
    expect(wrapper.find("amp-carousel").prop("width")).toBe("1200");
    expect(wrapper.find("amp-carousel").prop("height")).toBe("750");
  });
  it("shouldn't render Image Slideshow", () => {
    const wrapper = mount(<ImageGalleryElement element={sampleImageSlideshowWithoutStoryelements} />);
    expect(wrapper.find("amp-carousel").length).toBe(0);
  });
});
