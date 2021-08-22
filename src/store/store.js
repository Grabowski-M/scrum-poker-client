import { createStore } from 'vuex';
import room from './roomStore';

export default createStore({
  modules: {
    room,
  },
});
