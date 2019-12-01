import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Provider } from 'react-redux'
import store from './redux/store'

import { DefaultTheme, Provider as PaperProvider, Button, Appbar } from 'react-native-paper';

import Test from './container/Test'
import NCode from './container/NCode';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};
const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={{flex: 1}}>
          <Appbar.Header>
            <Appbar.Content
              title="Title"
              subtitle="Subtitle"
            />
          </Appbar.Header>
          <NCode />
        </View>
      </PaperProvider>
    </Provider>
  );
}


