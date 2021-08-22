import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Workspace from '../components/Workspace.vue';
import JoinRoom from '../views/JoinRoom.vue';
import PokerRoom from '../views/PokerRoom.vue';
import NewRoom from '../views/NewRoom.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/poker',
    name: 'Workspace',
    component: Workspace,
    children: [
      { path: 'new', component: NewRoom },
      { path: 'join', component: JoinRoom },
      { path: 'room/:id', component: PokerRoom },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
