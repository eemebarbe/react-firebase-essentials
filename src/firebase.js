import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
const app = firebase.initializeApp(config);
//app.functions().useFunctionsEmulator("http://localhost:5000");
export default app;
