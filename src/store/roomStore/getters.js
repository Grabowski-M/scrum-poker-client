export default {
  connection(state) {
    return state.connection;
  },
  connecting(state) {
    return state.connecting;
  },
  roomExistsError(state) {
    return state.room.roomExistsError;
  },
};
