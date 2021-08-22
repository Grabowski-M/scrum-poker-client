export default {
  setConnection(state, payload) {
    state.connection = payload.connection;
    state.connecting = payload.connecting;
  },
};
