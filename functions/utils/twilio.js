const functions = require("firebase-functions");

const accountSid = functions.config().twilio.account_sid;
const authToken = functions.config().twilio.auth_token;
const client = require('twilio')(accountSid, authToken);

exports.client = client;