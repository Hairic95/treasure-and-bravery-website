import { RouteRecordRaw } from 'vue-router';
import { EPages } from 'src/shared/base/enumerators';
import Home from 'pages/Home.vue';
import CharacterCreation from 'pages/CharacterCreation.vue';
import HowToPlay from 'pages/HowToPlay.vue';
import Combat from 'pages/Combat.vue';
import Magic from 'pages/Magic.vue';
import Items from 'pages/Items.vue';
import Npcs from 'pages/Npcs.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: EPages.Home,
        component: Home,
      },
      {
        path: '/character-creation',
        name: EPages.CharacterCreation,
        component: CharacterCreation,
      },
      { path: '/how-to-play', name: EPages.HowToPlay, component: HowToPlay },
      { path: '/combat', name: EPages.Combat, component: Combat },
      { path: '/magic', name: EPages.Magic, component: Magic },
      { path: '/items', name: EPages.Items, component: Items },
      { path: '/npcs', name: EPages.Npcs, component: Npcs },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
