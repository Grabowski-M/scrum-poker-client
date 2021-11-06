export default {
  handleConnection({ commit }, { connection }) {
    commit('setConnection', { connection, connecting: false });
  },
  handleDisconnect({ commit }) {
    commit('setConnection', { connection: null, connecting: true });
  },
  handleRoomStateChange({ commit }, { roomState }) {
    console.log({ roomState });
    commit('setRoomState', { roomState });
  },
};
