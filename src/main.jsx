import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/components/app/app.component';

const RootComponent = () => (
  <App />
);

ReactDOM.render(<RootComponent />, document.getElementById('app'));
