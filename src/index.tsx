import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { headStart, headEndBodyStart, bodyEnd } from "./boilerplate"
import App from './App'

const markup: string = ReactDOMServer.renderToStaticMarkup(<App />);
const str: string = `${headStart}${headEndBodyStart}${markup}${bodyEnd}`

export default str
