const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.https.onCall((data, context) => {
  var message = {
    notification: {
      title: data.title,
      body: data.body
    },
    token: data.token
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  admin
    .messaging()
    .send(message)
    .then(response => {
      console.log("Successfully sent message:", response);
      return;
    })
    .catch(error => {
      console.log("Error sending message:", error);
      return;
    });
});
