export default {
  setConnection(state, payload) {
    state.connection = payload.connection;
    state.connecting = payload.connecting;
  },
  handleRoomExistsError(state, payload) {
    state.room.roomExistsError = payload.roomExists;
  },
};
