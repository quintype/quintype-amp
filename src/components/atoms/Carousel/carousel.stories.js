import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from './Carousel';
import {Helmet} from 'react-helmet';

import { ServerStyleSheet } from 'styled-components';

const AmpDecorator = (storyFn) => {
  const sheet = new ServerStyleSheet();
  const styles = sheet.collectStyles();

  return (
    <div>
    <Helmet>
      <script src="https://cdn.ampproject.org/v0.js" async=""></script>
      <script async={undefined} custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"></script>
      <style amp-custom="">{styles.toString()}</style>
    </Helmet>
    { storyFn() }
  </div>
    );
  };

  storiesOf('Carousel', module)
    .addDecorator(AmpDecorator)
    .add('with images', () => (
      <Carousel height="300" width="500"
        layout="responsive"
        type="slides">
        <amp-img src="https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          width="400"
          height="300"
          alt="a sample image"></amp-img>
        <amp-img src="https://images.unsplash.com/photo-1581793111741-04b7034d1cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          width="400"
          height="300"
          alt="another sample image"></amp-img>
        <amp-img src="https://images.unsplash.com/photo-1581911705179-8e5221e6be29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          width="400"
          height="300"
          alt="another sample image"></amp-img>
      </Carousel>
    ));