import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCOvOU_3pD0hAkXphAbPeiA7RiEfi0Y9l4",
    authDomain: "crown-db-3ac81.firebaseapp.com",
    databaseURL: "https://crown-db-3ac81.firebaseio.com",
    projectId: "crown-db-3ac81",
    storageBucket: "crown-db-3ac81.appspot.com",
    messagingSenderId: "958983499684",
    appId: "1:958983499684:web:bf0c8685a8d540d1ea9b31"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;