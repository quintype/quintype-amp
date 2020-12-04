import { invertHexColor } from "./invert-color";

test("invertHexColor helper function", () => {
  expect(invertHexColor("#333")).toBe("#cccccc");
  expect(invertHexColor("333")).toBe("#cccccc");
  expect(invertHexColor("#333333")).toBe("#cccccc");
  expect(invertHexColor("333333")).toBe("#cccccc");
  expect(invertHexColor("#000")).toBe("#ffffff");
  expect(invertHexColor("#3bcedb")).toBe("#c43124");
  expect(invertHexColor("#ff0000")).toBe("#00ffff");
});
