import firebase from 'firebase/app';
//for db
import 'firebase/firestore';
//for auth
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

  // that's how we initialize the db
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //google auth utility
  const provider = new firebase.auth.GoogleAuthProvider();
  //we trigger the google popup whenever we use this google auth provider for auth and sign in
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;