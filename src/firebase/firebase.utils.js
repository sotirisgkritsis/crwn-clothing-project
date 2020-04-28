import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCxNmz4MXwjxaeIQ4VO4Had_tzLXJrSdTM",
    authDomain: "crwn-db-af695.firebaseapp.com",
    databaseURL: "https://crwn-db-af695.firebaseio.com",
    projectId: "crwn-db-af695",
    storageBucket: "crwn-db-af695.appspot.com",
    messagingSenderId: "861095070821",
    appId: "1:861095070821:web:b4f6d38ff18df8b3328a8c",
    measurementId: "G-5SYH1R55ZR"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;