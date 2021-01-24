import date from 'date-and-time';
const MonkeyLearn = require('monkeylearn');
const ml = new MonkeyLearn('100e5be1d640fadbc74970987e69b28da0f1ef71');
const model_id = 'cl_4omNGduL';

export const addEvent = (message, numPeople, expirationHours) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
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
          getState().firebase.auth.uid,
        ],
      })
    // })
  }
}

export const attendEvent = (event) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const db = getFirestore();
    db.collection("events").doc(event.key).update({
      ...event,
      people: [
        ...event.people,
        getState().firebase.auth.uid,
      ]
    });
  }
}

export const cancelEvent = (event) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const db = getFirestore();
    const people = event.people.filter(person => person !== getState().firebase.auth.uid);
    if (people.length === 0) {
      db.collection("events").doc(event.key).delete();
    } else {
      db.collection("events").doc(event.key).update({
        ...event,
        people, 
      });
    }
  }
}