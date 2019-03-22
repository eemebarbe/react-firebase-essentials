const functions = require("firebase-functions");
const axios = require("axios");

exports.checkRecaptcha = functions.https.onCall((data, context) => {
  const recaptchaResult = () => {
    return axios({
      method: "post",
      url: "https://recaptcha.google.com/recaptcha/api/siteverify",
      params: {
        secret: functions.config().recaptcha.secret,
        response: data.captchaResponse
      }
    })
      .then(result => {
        return result.data.success;
      })
      .catch(reason => {
        return { success: false };
      });
  };
  if (recaptchaResult()) {
    const actionCodeSettings = {
      url: "http://" + functions.config().app.base_url + "/confirmed",
      handleCodeInApp: true
    };
    functions
      .auth()
      .sendSignInLinkToEmail(data.email, actionCodeSettings)
      .then(res => {
        return { success: true };
      })
      .catch(error => {
        return { success: false };
      });
  } else {
    return { success: false };
  }
});
