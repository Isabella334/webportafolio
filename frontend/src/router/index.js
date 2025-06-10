import { createRouter, createWebHistory } from 'vue-router'
import Courthouse from '../views/Courthouse.vue'
import DocBrown from '../views/DocBrown.vue'
import HighSchool from '../views/HighSchool.vue'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import MartyHouse from '../views/MartyHouse.vue'
import TimeMachine from '../views/TimeMachine.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/mapa', name: 'Map', component: Map },
  { path: '/courthouse', name: 'Courthouse', component: Courthouse },
  { path: '/docbrown', name: 'DocBrown', component: DocBrown },
  { path: '/highschool', name: 'HighSchool', component: HighSchool },
  { path: '/martyhouse', name: 'MartyHouse', component: MartyHouse },
  { path: '/timemachine', name: 'TimeMachine', component: TimeMachine }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
