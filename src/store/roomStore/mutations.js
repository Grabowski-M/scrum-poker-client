export default {
  setConnection(state, payload) {
    state.connection = payload.connection;
    state.connecting = payload.connecting;
  },
  setRoomState(state, payload) {
    console.log({ payload });
    state.room = payload.roomState;
  },
};
