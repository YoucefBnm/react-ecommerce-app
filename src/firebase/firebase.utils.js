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

// get user info and store it in DB
// it's gonna be async because we're making a request to an API
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user is not authenticated !=> if not false
  if (!userAuth) return 
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()


  if(!snapShot.exists) {
    // if data doesn't exists so create data
    // (snapshot is the data we get)
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }
  //see if info exists
  // firestore gives us an object 
  return userRef
}

firebase.initializeApp(config)

//   for google auth
export const auth = firebase.auth()
export const firestore = firebase.firestore()

// google auth utils
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;