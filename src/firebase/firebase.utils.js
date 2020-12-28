import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1YTrX9mj2C2LuCpZ8r0utx_xom75hzDQ",
    authDomain: "e-clothing-d97cc.firebaseapp.com",
    databaseURL: "https://e-clothing-d97cc.firebaseio.com",
    projectId: "e-clothing-d97cc",
    storageBucket: "e-clothing-d97cc.appspot.com",
    messagingSenderId: "527236009252",
    appId: "1:527236009252:web:41068b59c5b5fdb0f437b1",
    measurementId: "G-MSH11CDT7K"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    console.log(firebase.doc('users/128qwert'))
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;