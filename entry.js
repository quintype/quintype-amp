
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/atoms/author/author.tsx';
reactComponents['Author'] = Component0;

import Component1 from '../src/atoms/story-elements/blurb/blurb.tsx';
reactComponents['Blurb'] = Component1;

import Component2 from '../src/molecules/header-card/header-card.tsx';
reactComponents['HeaderCard'] = Component2;