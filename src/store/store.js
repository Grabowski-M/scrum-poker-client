import { createStore } from 'vuex';
import roomStore from './roomStore';
import connectionStore from './connectionStore';

export default createStore({
  modules: {
    roomStore,
    connectionStore,
  },
});
