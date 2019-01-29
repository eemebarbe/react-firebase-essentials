const functions = require("firebase-functions");
const rp = require("request-promise");

exports.checkRecaptcha = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const response = req.query.response;
  rp({
    uri: "https://recaptcha.google.com/recaptcha/api/siteverify",
    method: "POST",
    formData: {
      secret: process.env.RECAPTCHA_SECRET,
      response: response
    },
    json: true
  })
    .then(result => {
      if (result.success) {
        res.send("You're good to go, human.");
        return 1;
      } else {
        res.send("Recaptcha verification failed. Are you a robot?");
        return 1;
      }
    })
    .catch(reason => {
      res.send("Recaptcha request failed.");
    });
});
