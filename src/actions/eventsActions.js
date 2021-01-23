import date from 'date-and-time';
const MonkeyLearn = require('monkeylearn');
const ml = new MonkeyLearn('100e5be1d640fadbc74970987e69b28da0f1ef71');
const model_id = 'cl_4omNGduL';

export const addEvent = (message, numPeople, expirationHours) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const db = getFirestore();
    /*ml.classifiers.classify(model_id, [
      message
    ]).then(r => {
      const category = r.body[0].classifications[0]["tag_name"];
      */
     const category = "Science & Technology";
      db.collection("events").add({
        message,
        numPeople,
        expires: date.addHours(new Date(), expirationHours),
        category,
        people: [
          firebase.auth.uid,
        ],
      })
    // })
  }
}