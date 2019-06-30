import firebase from "../firebase.js";

export const sendPushNotification = data => {
  const push = firebase.functions().httpsCallable("sendPushNotification");
  push({
    token: data.token,
    title: data.title,
    body: data.body
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
