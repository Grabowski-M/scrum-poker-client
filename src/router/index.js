import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JoinRoom from '../views/JoinRoom';
import PokerRoom from '../views/PokerRoom';
import PokerForm from '../views/PokerForm';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/join',
    component: JoinRoom,
  }, {
    path: '/join/:id',
    component: PokerRoom,
  }, {
    path: '/new',
    component: PokerForm,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router