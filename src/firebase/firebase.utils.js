import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDeSNJ3qNNH2b--xTGIjNHpGOvSh2wza00",
    authDomain: "silken-mile-261517.firebaseapp.com",
    projectId: "silken-mile-261517",
    storageBucket: "silken-mile-261517.appspot.com",
    messagingSenderId: "495531656069",
    appId: "1:495531656069:web:af76c0a8ff50bed8ea7aec",
    measurementId: "G-JHE1GW59L0"
  };

  firebase.initializeApp(config)

//   for google auth
export const auth = firebase.auth()
export const firestore = firebase.firestore()

// google auth utils
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;