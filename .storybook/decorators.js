import * as React from 'react';
import {Helmet} from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

const AmpDecorator = (storyFn) => {
  const sheet = new ServerStyleSheet();
  const styles = sheet.collectStyles();
  return (
    <div>
      <Helmet>
        <script src="https://cdn.ampproject.org/v0.js" async=""></script>
        <style amp-custom="">{styles.toString()}</style>
      </Helmet>
      { storyFn() }
    </div>
    );
  };

  export {AmpDecorator}