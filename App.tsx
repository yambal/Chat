import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Provider } from 'react-redux'
import store from './redux/store'

import Test from './container/Test'

export default function App() {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
}


