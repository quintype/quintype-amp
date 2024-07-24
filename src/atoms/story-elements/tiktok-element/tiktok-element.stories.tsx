import React from "react";
import { storiesOf } from "@storybook/react";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";
import { TiktokElement } from "./tiktok-element";

const sampleTiktokElement = {
  description: "",
  "embed-js":
    "PGJsb2NrcXVvdGUgY2xhc3M9InRpa3Rvay1lbWJlZCIgY2l0ZT0iaHR0cHM6Ly93d3cudGlrdG9rLmNvbS9AZGhhcndtYW5zL3ZpZGVvLzczNjE2MzE3OTAwNTE2NDI2NTciIGRhdGEtdmlkZW8taWQ9IjczNjE2MzE3OTAwNTE2NDI2NTciIGRhdGEtZW1iZWQtZnJvbT0ib2VtYmVkIiBzdHlsZT0ibWF4LXdpZHRoOjYwNXB4OyBtaW4td2lkdGg6MzI1cHg7Ij4gPHNlY3Rpb24+IDxhIHRhcmdldD0iX2JsYW5rIiB0aXRsZT0iQGRoYXJ3bWFucyIgaHJlZj0iaHR0cHM6Ly93d3cudGlrdG9rLmNvbS9AZGhhcndtYW5zP3JlZmVyPWVtYmVkIj5AZGhhcndtYW5zPC9hPiA8cD5QYXJ0IDEuIDxhIHRpdGxlPSJmeXAiIHRhcmdldD0iX2JsYW5rIiBocmVmPSJodHRwczovL3d3dy50aWt0b2suY29tL3RhZy9meXA/cmVmZXI9ZW1iZWQiPiNmeXA8L2E+IDxhIHRpdGxlPSJ2aXJhbCIgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHBzOi8vd3d3LnRpa3Rvay5jb20vdGFnL3ZpcmFsP3JlZmVyPWVtYmVkIj4jdmlyYWw8L2E+IDxhIHRpdGxlPSJyZWNvbW1lbmRhdGlvbnMiIHRhcmdldD0iX2JsYW5rIiBocmVmPSJodHRwczovL3d3dy50aWt0b2suY29tL3RhZy9yZWNvbW1lbmRhdGlvbnM/cmVmZXI9ZW1iZWQiPiNyZWNvbW1lbmRhdGlvbnM8L2E+IDxhIHRpdGxlPSJ4eXpiY2EiIHRhcmdldD0iX2JsYW5rIiBocmVmPSJodHRwczovL3d3dy50aWt0b2suY29tL3RhZy94eXpiY2E/cmVmZXI9ZW1iZWQiPiN4eXpiY2E8L2E+IDxhIHRpdGxlPSJtb3ZpZSIgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHBzOi8vd3d3LnRpa3Rvay5jb20vdGFnL21vdmllP3JlZmVyPWVtYmVkIj4jbW92aWU8L2E+IDxhIHRpdGxlPSJhc21yIiB0YXJnZXQ9Il9ibGFuayIgaHJlZj0iaHR0cHM6Ly93d3cudGlrdG9rLmNvbS90YWcvYXNtcj9yZWZlcj1lbWJlZCI+I2FzbXI8L2E+IDxhIHRpdGxlPSJydWdjbGVhbmluZyIgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHBzOi8vd3d3LnRpa3Rvay5jb20vdGFnL3J1Z2NsZWFuaW5nP3JlZmVyPWVtYmVkIj4jcnVnY2xlYW5pbmc8L2E+IDxhIHRpdGxlPSJkaGFybWFubiIgdGFyZ2V0PSJfYmxhbmsiIGhyZWY9Imh0dHBzOi8vd3d3LnRpa3Rvay5jb20vdGFnL2RoYXJtYW5uP3JlZmVyPWVtYmVkIj4jZGhhcm1hbm48L2E+PC9wPiA8YSB0YXJnZXQ9Il9ibGFuayIgdGl0bGU9IuKZrCBvcmlnaW5hbCBzb3VuZCAtIERoYXJXb21hbiAtIFRoZSBWaXJhbCBWaWRlb3MiIGhyZWY9Imh0dHBzOi8vd3d3LnRpa3Rvay5jb20vbXVzaWMvb3JpZ2luYWwtc291bmQtRGhhcldvbWFuLTczNjE2MzE4Njk0ODc1NDkyMTY/cmVmZXI9ZW1iZWQiPuKZrCBvcmlnaW5hbCBzb3VuZCAtIERoYXJXb21hbiAtIFRoZSBWaXJhbCBWaWRlb3M8L2E+IDwvc2VjdGlvbj4gPC9ibG9ja3F1b3RlPiA8c2NyaXB0IGFzeW5jIHNyYz0iaHR0cHM6Ly93d3cudGlrdG9rLmNvbS9lbWJlZC5qcyI+PC9zY3JpcHQ+",
  "page-url": "/story/872a1a37-47dd-4c66-88c2-7fa87887652f/element/55cc4513-d602-4d8f-abbd-e8804fa6ad81",
  type: "jsembed",
  "family-id": "f764a562-a7a2-41b3-8d76-2fe4e0c123a5",
  title: "",
  id: "c4fba672-a3c8-462c-9cd5-0a341bf681d9",
  metadata: {
    "tiktok-video-url": "https://www.tiktok.com/@dharwmans/video/7361631790051642657",
    provider: "tiktok",
    "tiktok-video-id": "7361631790051642657"
  },
  subtype: "tiktok-video"
};

const { metadata, ...sampleTiktokElementWithoutMetadata } = sampleTiktokElement;

storiesOf("Tiktok Element", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <TiktokElement element={sampleTiktokElement} />)
  .add("With a square different layout", () => (
    <TiktokElement element={sampleTiktokElement} layout="fixed" width="400" height="400" />
  ))
  .add("Tiktok without metadata", () => <TiktokElement element={sampleTiktokElementWithoutMetadata} />);
