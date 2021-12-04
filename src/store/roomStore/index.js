import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  state: {
    isLeader: false,
    room: null,
    cards: null,
  },
  mutations,
  getters,
  actions,
};
