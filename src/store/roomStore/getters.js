export default {
  roomState(state) {
    return state.room;
  },
  isLeader(state) {
    return state.isLeader;
  },
  leaderId(state) {
    return state.room.leader;
  },
  cards(state) {
    return state.cards;
  },
};
