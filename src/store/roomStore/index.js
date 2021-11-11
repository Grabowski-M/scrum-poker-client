import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  state: {
    connection: null,
    connecting: true,
    isLeader: false,
    room: null,
  },
  mutations,
  getters,
  actions,
};
