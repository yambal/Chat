import React from 'react';
import {StyleSheet,  View, Text, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase'

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const LoadingScreen:React.FC = props => {
  React.useEffect(() => {
    checkIfLoggin()
  }, [])

  const checkIfLoggin = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(JSON.stringify(user))
        props.navigation.navigate('DashboadScreen')
      }else{
        props.navigation.navigate('LoginScreen')
      }
    })
  }
  
  return (
      <View style={styles.container}>
          <ActivityIndicator size="large" />
      </View>
  )
}

export default LoadingScreen
