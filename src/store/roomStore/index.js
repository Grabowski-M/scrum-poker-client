import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  state: {
    connection: null,
    connecting: true,
    room: null,
  },
  mutations,
  getters,
  actions,
};
