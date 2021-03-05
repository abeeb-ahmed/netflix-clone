import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCQWtIFJV_bAKNyHzHPacLSCxIAkQHaQm4",
  authDomain: "netflix-clone-f0553.firebaseapp.com",
  projectId: "netflix-clone-f0553",
  storageBucket: "netflix-clone-f0553.appspot.com",
  messagingSenderId: "590604726778",
  appId: "1:590604726778:web:34959ca634389fd306f443",
  measurementId: "G-BJ3PZ583YL",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export default db;
export { auth };
