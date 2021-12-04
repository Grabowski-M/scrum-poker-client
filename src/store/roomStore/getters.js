export default {
  roomState(state) {
    return state.room;
  },
  isLeader(state) {
    return state.isLeader;
  },
  cards(state) {
    return state.cards;
  },
};
