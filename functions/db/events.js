const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { client } = require("../utils/twilio");

const db = admin.firestore();

exports.onUpdate = functions.firestore.document("events/{eventID}").onUpdate(async (snap, context) => {
  const eventID = context.params.eventID;
  // event pops!
  if (snap.after.data().people.length >= snap.after.data().numPeople) {
    for (person in snap.after.data().people) {
      db.collection("users").doc(userID).get().then(res => {
        return client.messages.create({
          body: 'Your event has popped!',
          from: "+17028304723",
          to: "+16174557815",
        })
      }).then(message => message.sid).catch();
    }
    await db.collection("events").doc(eventID).delete();  
  } else if (snap.after.data().people.length === 0) {
    await db.collection("events").doc(eventID).delete();
  }
})