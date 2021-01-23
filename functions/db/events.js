const functions = require('firebase-functions');
const { client } = require("../utils/twilio");

exports.onUpdate = functions.firestore.document("events/{eventID}").onUpdate(async (snap, context) => {
  const eventID = context.params.eventID;
  if (snap.after.data().people.length >= snap.after.data().numPeople) {
    client.messages.create({
      from: "+16174557815",
      to: "+13106587944",
    })
  }
})