import {createRouter, createWebHistory} from 'vue-router';

import login from '../src/components/login/login.vue'
import cadastro from '../src/components/cadastro/cadastro.vue'
import home from '../src/components/dasboard/home.vue'
import reservar from '../src/components/dasboard/reservar.vue'
import consultar from '../src/components/dasboard/consultar.vue'
import historico from '../src/components/dasboard/historico.vue'
import atualizar from '../src/components/dasboard/reservaUpdate.vue'

const routes = [
    { path: '/',  name: 'login', component: login },
    { path: '/cadastro', name: 'cadastro', component: cadastro},
    { path: '/home', name: 'home', component: home},
    { path: '/reservar', name: 'reservar', component: reservar},
    { path: '/consultar', name: 'consultar', component: consultar},
    { path: '/historico', name: 'historico', component: historico},
    { path: '/update', name: 'atualizar', component: atualizar}
   
  ]


  export const router = createRouter({
      history: createWebHistory(),
      routes


  })