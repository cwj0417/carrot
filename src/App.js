/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index';
import App from './navigator'

export default () => (
    <Provider store={store}>
      <App></App>
    </Provider>
)
