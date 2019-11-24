import React from 'react';
import * as firebase from 'firebase'
import { TextInput } from 'react-native-paper';

const FIREBASE_CONST = {
    apiKey: "AIzaSyCNPJFs7Yhm6Yzkzlt0dxzv6zb2QS7dDio",
    authDomain: "chat-f72f3.firebaseapp.com",
    databaseURL: "https://chat-f72f3.firebaseio.com",
    projectId: "chat-f72f3",
    storageBucket: "chat-f72f3.appspot.com"
}

// firebase.initializeApp(FIREBASE_CONST)

const Firebase:React.FC = () => {
  const [email, setEmail] = React.useState('')

  const handleEmail = React.useCallback(
    (email: string) => {
      setEmail(email)
    },
    []
  )

  return (
    <TextInput
      label='Email'
      value={email}
      onChangeText={handleEmail}
    />
  )
}

export default Firebase