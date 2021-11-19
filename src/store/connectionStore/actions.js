export default {
  handleConnection({ commit }, { connection }) {
    commit('setConnection', { connection, connecting: false });
  },
  handleDisconnect({ commit }) {
    commit('setConnection', { connection: null, connecting: true });
  },
};
