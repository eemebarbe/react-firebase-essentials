const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: "*" });

exports.checkRecaptcha = functions.https.onCall((data, context) => {
  return axios({
    method: "post",
    url: "https://recaptcha.google.com/recaptcha/api/siteverify",
    params: {
      secret: functions.config().recaptcha.secret,
      response: data.captchaResponse
    }
  })
    .then(result => {
      return { success: result.data.success };
    })
    .catch(reason => {
      return { success: false };
    });
});
