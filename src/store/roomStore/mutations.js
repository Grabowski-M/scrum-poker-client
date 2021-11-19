export default {
  setRoomState(state, payload) {
    const { roomState, context } = payload;
    state.isLeader = roomState.leader === context.getters.connection.id;
    state.room = payload.roomState;
  },
  resetRoomState(state) {
    state.room = null;
  },
};
