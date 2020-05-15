import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Carousel } from "./carousel";

storiesOf("Carousel", module)
  .add("default carousel", () => (
    <Carousel height="300" width="500" layout="responsive" type="slides">
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
    </Carousel>
  ))
  .add("carouselimages with width, height and responsive layout", () => (
    <Carousel height="300" width="500" layout="responsive" type="slides">
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
    </Carousel>
  ))
  .add("carousel images with lightbox", () => (
    <Carousel height="300" width="500" layout="responsive" type="slides" lightbox={true}>
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
    </Carousel>
  ));
