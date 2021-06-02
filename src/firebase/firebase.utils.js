import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAHDxZxDbYrbNC90Z_K4-jwLQ472XFsQFE",
    authDomain: "crwn-db-6da12.firebaseapp.com",
    projectId: "crwn-db-6da12",
    storageBucket: "crwn-db-6da12.appspot.com",
    messagingSenderId: "920871135134",
    appId: "1:920871135134:web:737d9c93ae8640f254588f",
    measurementId: "G-VLFKQHY0FH"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;