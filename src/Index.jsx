import React from 'react';
import { render } from 'react-dom';
import App from './App';

import './styles/main.scss';

const renderApp = (Application) => {
  render(
    <Application />, 
    document.getElementById('root')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    renderApp(App);
  });
}
