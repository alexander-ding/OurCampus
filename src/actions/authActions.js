import { push } from "connected-react-router";

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