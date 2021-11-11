export default {
  setConnection(state, payload) {
    state.connection = payload.connection;
    state.connecting = payload.connecting;
  },
  setRoomState(state, payload) {
    const { roomState } = payload;
    state.isLeader = roomState.leader === state.connection.id;
    state.room = payload.roomState;
  },
};
