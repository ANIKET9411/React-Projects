// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdIirI6iIZB3RR86LoyQP2aMmmOKRd6nw",
  authDomain: "fir-practice-797de.firebaseapp.com",
  projectId: "fir-practice-797de",
  storageBucket: "fir-practice-797de.appspot.com",
  messagingSenderId: "582764035004",
  appId: "1:582764035004:web:750192c44da07eafe309b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
// export default app;
