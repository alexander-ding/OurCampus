exports.authSelector = state => state.firebase.auth;
exports.profileSelector = state => state.firebase.profile;
exports.eventsSelector = state => state.firestore.data.events;
exports.eventsListSelector = state => state.firestore.ordered.events;
exports.usersSelector = state => state.firestore.data.users;
exports.usersListSelector = state => state.firestore.ordered.users;
