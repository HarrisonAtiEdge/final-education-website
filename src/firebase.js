import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDektFz0Mm4NfSsTMatwa-6MqdNw_Oghsw",
  authDomain: "educationsignup-e48b9.firebaseapp.com",
  projectId: "educationsignup-e48b9",
  storageBucket: "educationsignup-e48b9.appspot.com",
  messagingSenderId: "863044243938",
  appId: "1:863044243938:web:cb41206ae6fc411c8da9bb"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth,
}