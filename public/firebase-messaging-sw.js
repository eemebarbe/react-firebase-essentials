importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: process.env.REACT_APP_PUSH_API_ID
});

if ("Notification" in window) {
  const messaging = firebase.messaging();
}
