import React from 'react';
import { connect } from 'react-redux'
import * as firebase from 'firebase'
// import * as Facebook from 'expo-facebook';
import { TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import iRootState from '../redux/rootState';

import { 
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STRAGE_BUCKET
} from 'react-native-dotenv'

const FIREBASE_CONST = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STRAGE_BUCKET
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

const mapStateToProps = (state:iRootState) => {
  return {
    FIREBASE_API_KEY: state.config.FIREBASE_API_KEY
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Firebase)