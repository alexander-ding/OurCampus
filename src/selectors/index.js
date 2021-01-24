import { createSelector } from 'reselect';

export const authSelector = state => state.firebase.auth;
export const profileSelector = state => state.firebase.profile;
export const eventsSelector = state => state.firestore.data.events;
export const eventsListSelector = state => state.firestore.ordered.events;
export const usersSelector = state => state.firestore.data.users;
export const usersListSelector = state => state.firestore.ordered.users;


export const currentEventsSelector = createSelector(
  eventsSelector,
  (events) => {
    if (!events) return [];
    return Object.entries(events)
    .map(([key, event]) => ({...event, key}))
    .filter(event => event.expires.toDate() >= new Date());
  }
)

export const suggestedEventsSelector = createSelector(
  currentEventsSelector,
  authSelector,
  (events, auth) => {
    return events.filter(event => !event.people.includes(auth.uid));
  }
)

export const myEventsSelector = createSelector(
  currentEventsSelector,
  authSelector,
  (events, auth) => {
    return events.filter(event => event.people.includes(auth.uid));
  }
)