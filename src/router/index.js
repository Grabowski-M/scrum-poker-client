import { createRouter, createWebHashHistory } from 'vue-router';
import Workspace from '../components/Workspace.vue';
import JoinRoom from '../views/JoinRoom.vue';
import PokerRoom from '../views/PokerRoom.vue';

const routes = [
  {
    path: '/',
    name: 'Workspace',
    component: Workspace,
    children: [
      { path: '/', name: 'Join room', component: JoinRoom },
      { path: 'room/:id', component: PokerRoom },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
