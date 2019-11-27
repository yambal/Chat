import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Expo from 'expo'
import * as GoogleSignIn from 'expo-google-sign-in';
import * as AppAuth from 'expo-app-auth';
const { URLSchemes } = AppAuth;
// import { GoogleSignIn } from 'expo'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

// https://docs.expo.io/versions/latest/sdk/google-sign-in/
// https://blog.expo.io/react-native-google-sign-in-with-expo-d1707579a7ce

const LoginScreen:React.FC = () => {

  const [isReady, setIsReady] = React.useState(false)
  const [user, setUser] = React.useState(null)

  React.useEffect(
    () => {
      initAsync();
    },
    []
  )

  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId: '272157910356-4aak5hvtks8m7ekgjc3pb6on256cgfgf.apps.googleusercontent.com',
    });
    _syncUserWithStateAsync();
  };

  const _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setUser(user)
  };

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        console.log(user)
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };
  
  const signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    this.setState({ user: null });
  };

  /*
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        clientId: '272157910356-jrcfe0t3v3ajuv253h1r52duq5oq5jgq.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      console.log(result.type)
      if (result.type === 'success') {
        
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  */

  const handleSignUp = React.useCallback(
    () => {
      signInAsync()
    },
    []
  )

  return (
    <View style={styles.container}>
      <Text>[{isReady}]</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={handleSignUp}
      >
        Sign up
      </Button>
    </View>
  )
}

export default LoginScreen
