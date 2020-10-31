import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBDyJSubEaYotQbq_r9Fe2AMSnsBYDCcjo",
    authDomain: "bcuz-project.firebaseapp.com",
    databaseURL: "https://bcuz-project.firebaseio.com",
    projectId: "bcuz-project",
    storageBucket: "bcuz-project.appspot.com",
    messagingSenderId: "617404385700",
    appId: "1:617404385700:web:34497956a27e4f042e1931",
    measurementId: "G-VMXVXS84DC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;