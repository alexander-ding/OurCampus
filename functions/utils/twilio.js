const twilio = require("twilio");

const accountSid = process.env.twilio.account_sid;
const authToken = process.env.twilio.auth_token;
const client = require('twilio')(accountSid, authToken);

export { client };