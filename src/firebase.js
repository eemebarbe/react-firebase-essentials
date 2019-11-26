import * as firebase from "firebase/app";
import "firebase/messaging";
import "firebase/auth";
import "firebase/functions";
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID
};
firebase.initializeApp(config);

if ("Notification" in window) {
  const messaging = firebase.messaging();
  messaging.usePublicVapidKey(process.env.REACT_APP_FIREBASE_MESSAGING_CERT);

  messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    // push message to UI
  });

  messaging.onTokenRefresh(() => {
    const db = firebase.firestore();
    messaging
      .getToken()
      .then(refreshedToken => {
        db.collection("users")
          .doc(firebase.auth().currentUser.uid)
          .update({ pushTokenWeb: refreshedToken })
          .then(() => {
            console.log("Token updated.");
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log("Unable to retrieve refreshed token ", err);
      });
  });
}

export default firebase;
