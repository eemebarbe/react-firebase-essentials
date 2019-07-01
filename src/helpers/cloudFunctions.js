import firebase from "../firebase.js";

export const sendPushNotification = data => {
  if (data.token) {
    const push = firebase.functions().httpsCallable("sendPushNotification");
    push({
      token: data.token,
      title: data.title,
      body: data.body
    });
  }
};
