import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'


import { Provider } from 'react-redux'
import store from './redux/store'

import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen'
import DashboadScreen from './screens/DashboadScreen'

// import Test from './container/Test'
// import Firebase from './container/Firebase';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboadScreen: DashboadScreen
})
const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}


