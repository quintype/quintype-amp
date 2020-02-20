import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './header';


storiesOf('Header', module)
  .add('Without src without custom styles', () => (
    <Header />
  ))
  .add('With SVG icon as src; without any custom styles', () => (
    <Header
      logoSrc="/header-logo.svg"
    />
  ))
  .add('With SVG icon as src; with custom styles for header', () => (
    <Header
      logoSrc="/header-logo.svg"
      headerStyles="background: #36154f;"
    />
  ))
  .add('With PNG icon as src; without any custom styles', () => (
    <Header
      logoSrc="/header-logo-image.png"
    />
  ))
  .add('With PNG icon as src; with custom styles for header', () => (
    <Header
      logoSrc="/header-logo-image.png"
      headerStyles="background: #36154f;"
    />
  ))
  .add('With PNG icon as src; with custom styles for header and logo', () => (
    <Header
      logoSrc="/header-logo-image.png"
      headerStyles="background: #36154f;"
      logoStyles="width:500px;height:500px"
    />
  ))