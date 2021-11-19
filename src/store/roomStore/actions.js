export default {
  handleRoomStateChange(context, { roomState }) {
    context.commit('setRoomState', { context, roomState });
  },
  handleRoomStateReset({ commit }) {
    commit('resetRoomState');
  },
};
