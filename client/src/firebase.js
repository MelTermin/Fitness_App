import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyArq50TdJ_NsAiMqzwBSsCoOuZPnfMq16g",
  authDomain: "final-project-try.firebaseapp.com",
  projectId: "final-project-try",
  storageBucket: "final-project-try.appspot.com",
  messagingSenderId: "558216456955",
  appId: "1:558216456955:web:93118f3c770c1fe6ce9e5e",
  measurementId: "G-J530NVKVQQ"
};


if(!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig);
}

export const auth=firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// always prompt for google auth when using this provider
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
  return await auth.signInWithPopup(googleProvider);
};

export default firebase;