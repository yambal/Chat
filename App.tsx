import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Provider } from 'react-redux'
import store from './redux/store'

import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';

import Test from './container/Test'
import Location from './container/Location'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Test />
        <Location />
      </PaperProvider>
    </Provider>
  );
}


