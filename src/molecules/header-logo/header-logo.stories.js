import * as React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderLogo from './header-logo';


storiesOf('HeaderLogo', module)
  .add('Without src without custom styles', () => (
    <HeaderLogo />
  ))
  .add('With SVG icon as src; without any custom styles', () => (
    <HeaderLogo
      logoSrc="/header-logo.svg"
    />
  ))
  .add('With SVG icon as src; with custom styles', () => (
    <HeaderLogo
      logoSrc="/header-logo.svg"
      logoStyles="height: 500px;width: 500px;"
    />
  ))
  .add('With PNG icon as src; without any custom styles', () => (
    <HeaderLogo
      logoSrc="/header-logo-image.png"
    />
  ))
  .add('With PNG icon as src; with custom styles', () => (
    <HeaderLogo
      logoSrc="/header-logo-image.png"
      logoStyles="height: 500px;width: 500px;"
    />
  ))