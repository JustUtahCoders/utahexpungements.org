import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyB-dKhsYMQNLdC2cIZxDeQgR-xp51kAOkE",
  authDomain: "utah-expungements-org.firebaseapp.com",
  databaseURL: "https://utah-expungements-org.firebaseio.com",
  projectId: "utah-expungements-org",
  storageBucket: "utah-expungements-org.appspot.com",
  messagingSenderId: "50371694028"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

const database = firebase.firestore();

export { auth, database };
