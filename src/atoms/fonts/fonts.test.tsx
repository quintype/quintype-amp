import { shallow } from "enzyme";
import { FontsBase } from "./fonts";
import React from "react";

const dummyConfig = {
  ampConfig: {
    fonts: {
      primary: {
        url: "Mukta+Malar:300,400,600,700",
        family: '"Mukta Malar", sans-serif'
      },
      secondary: {
        url: "Mukta+Malar:400,400italic,700,700italic",
        family: '"Mukta Malar",sans-serif'
      }
    }
  },
  opts: {
    render: {
      customFonts: {
        primary1: "https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold1.woff2",
        secondary1: "https://fea.assettype.com/malibu/assets/MalibuHeadlineTextRegular1.woff2",
        primary2: "https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold2.woff2",
        secondary2: "https://fea.assettype.com/malibu/assets/MalibuHeadlineTextRegular2.woff2"
      }
    }
  }
};


describe("Fonts component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<FontsBase config={dummyConfig} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should preconnect to fonts provider and preload fonts", () => {
    const wrapper = shallow(<FontsBase config={dummyConfig} />);
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("rel")
    ).toBe("preconnect dns-prefetch");
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:300,400,600,700&display=swap");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:400,400italic,700,700italic&display=swap");
  });
  it("Should preconnect to fonts provider and preload custom primary 1 font when passed on opts object", () => {
    const wrapper = shallow(<FontsBase config={dummyConfig} />);
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("rel")
    ).toBe("preconnect dns-prefetch");
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:300,400,600,700&display=swap");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:400,400italic,700,700italic&display=swap");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold1.woff2");
  });
  it("Should preconnect to fonts provider and preload custom secondary 1 font when passed on opts object", () => {
    const wrapper = shallow(<FontsBase config={dummyConfig} />);
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("rel")
    ).toBe("preconnect dns-prefetch");
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:300,400,600,700&display=swap");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:400,400italic,700,700italic&display=swap");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold1.woff2");
    expect(
      wrapper
        .find(`link`)
        .at(4)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(4)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(4)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineTextRegular1.woff2");
  });
  it("Should preconnect to fonts provider and preload custom primary 2 font when passed on opts object", () => {
    const wrapper = shallow(<FontsBase config={dummyConfig} />);
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("rel")
    ).toBe("preconnect dns-prefetch");
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:300,400,600,700&display=swap");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:400,400italic,700,700italic&display=swap");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold1.woff2");
    expect(
      wrapper
        .find(`link`)
        .at(4)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(4)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(4)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineTextRegular1.woff2");
    expect(
      wrapper
        .find(`link`)
        .at(5)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(5)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(5)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold2.woff2");
  });
  it("Should preconnect to fonts provider and preload custom secondary 2 font when passed on opts object", () => {
    const wrapper = shallow(<FontsBase config={dummyConfig} />);
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("rel")
    ).toBe("preconnect dns-prefetch");
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:300,400,600,700&display=swap");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:400,400italic,700,700italic&display=swap");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(3)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold1.woff2");
    expect(
      wrapper
        .find(`link`)
        .at(4)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(4)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(4)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineTextRegular1.woff2");
    expect(
      wrapper
        .find(`link`)
        .at(5)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(5)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(5)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineSemiBold2.woff2");
    expect(
      wrapper
        .find(`link`)
        .at(6)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(6)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(6)
        .prop("href")
    ).toBe("https://fea.assettype.com/malibu/assets/MalibuHeadlineTextRegular2.woff2");
  });
});
