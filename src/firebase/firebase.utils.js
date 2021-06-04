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
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;