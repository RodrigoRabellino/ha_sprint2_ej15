const API_KEY = "";
const SERVER_PREFIX = "";

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: API_KEY,
  server: SERVER_PREFIX,
});

async function callPing() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

callPing();

module.exports = { callPing };
