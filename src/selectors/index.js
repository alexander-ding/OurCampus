import { createSelector } from 'reselect';

export const authSelector = state => state.firebase.auth;
export const profileSelector = state => state.firebase.profile;
export const eventsSelector = state => state.firestore.data.events;
export const eventsListSelector = state => state.firestore.ordered.events;
export const usersSelector = state => state.firestore.data.users;
export const usersListSelector = state => state.firestore.ordered.users;
export const selectedCategorySelector = state => state.selectedCategory;
export const searchSelector = state => state.search;

export const currentEventsSelector = createSelector(
  eventsSelector,
  (events) => {
    if (!events) return [];
    return Object.entries(events)
    .map(([key, event]) => ({...event, key}))
    .filter(event => event.expires && event.expires.toDate() >= new Date());
  }
)

export const allSuggestedEventsSelector = createSelector(
  currentEventsSelector,
  authSelector,
  (events, auth) => {
    return events.filter(event => !event.people.includes(auth.uid));
  }
)

export const suggestedEventsSelector = createSelector(
  allSuggestedEventsSelector,
  selectedCategorySelector,
  searchSelector,
  (events, selectedCategory, search) => {
    const searchedEvents = events.filter(event => event.message.toLowerCase().includes(search.toLowerCase()));
    if (selectedCategory) return searchedEvents.filter(event => event.category === selectedCategory);
    return searchedEvents;
  }
)

export const myEventsSelector = createSelector(
  currentEventsSelector,
  authSelector,
  (events, auth) => {
    return events.filter(event => event.people.includes(auth.uid));
  }
)