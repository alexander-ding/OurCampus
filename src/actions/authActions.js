import { push } from "connected-react-router";
import { isValidPhoneNumber } from 'react-phone-number-input';

export const login = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.login({
      provider: "google",
      type: "popup",
      customParameters: {
        hd: "brown.edu",
      }
    }).then(r => {
      if (r.additionalUserInfo.isNewUser) {
        dispatch(push("/NewUser"));
      }
    });
  }
}

export const logout = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.logout().then(() => {
      dispatch(push("/"));
    })
  }
}

export const completeProfile = (number) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    if (isValidPhoneNumber(number)) {
      const db = getFirestore();
      db.collection("users").doc(getState().firebase.auth.uid).update({
        phone: number,
        isProfileComplete: true,
      });
    }
  }
}