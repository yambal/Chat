import React from 'react';
import * as firebase from 'firebase'
import * as Facebook from 'expo-facebook';
import { TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';

const FIREBASE_CONST = {

}

firebase.initializeApp(FIREBASE_CONST)

const Firebase:React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleEmail = React.useCallback(
    (email: string) => {
      setEmail(email)
    },
    []
  )

  const handlePassword = React.useCallback(
    (password: string) => {
      setPassword(password)
    },
    []
  )

  const handleLogin = React.useCallback(
    () => {
      console.log(36, email, password)
      try {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log(user)
          })
      } catch (error) {
        console.log(error)
      }
    },
    []
  )

  const handleSignUp = React.useCallback(
    () => {
      console.log(52, email, password)
      console.log(email)
      console.log(password)
      try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
      } catch (error) {
        console.log(error)
      }
    },
    [email, password]
  )

  return (
    <View>
      <TextInput
        label='Email'
        value={email}
        onChangeText={handleEmail}
      />
      <TextInput
        label='Email'
        value={password}
        onChangeText={handlePassword}
      />
      <Button
        icon="camera"
        mode="contained"
        onPress={handleLogin}
      >
        Login
      </Button>
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

export default Firebase