import React from 'react';
import { Provider } from 'react-redux'
import { App, View } from 'framework7-react';

import routes from '../routes';
import { store, stateKernel } from '../store';

// Framework7 parameters here
const f7params = {
  id: 'scb.tablet', // App bundle ID
  name: 'Tablet', // App name
  theme: 'ios', // Automatic theme detection
  version: "Phiên bản: alpha-20190108",
  // App routes
  routes,
  // App Framework7 Redux state kernel
  stateKernel,
  // Disable F7 automated routing for Links
  clicks: {
    externalLinks: 'a[href="#"]'
  },
  // Disable F7 automated routing for backdrops    
  panel: {
    closeByBackdropClick: false
  },
  popup: {
    closeByBackdropClick: false
  },
  statusbarOverlay: false
};

export default () => {
  return (
    <Provider store={store}>
      <App params={f7params}>
        <View id="main-view" url="/login/" main className="ios-edges"/>
      </App>
    </Provider>
  );
};
