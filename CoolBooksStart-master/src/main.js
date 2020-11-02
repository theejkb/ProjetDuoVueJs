import Vue from 'vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/css/font-face.css';
import '@/assets/css/all.min.css';

import '@/assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
import '@/assets/vendor/font-awesome-5/css/fontawesome-all.min.css';

import '@/assets/vendor/mdi-font/css/material-design-iconic-font.min.css';

import '@/assets/css/theme.css';
import VueRouter from 'vue-router';

import App from './App.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home', name:'HomePage',
    component: () => import('./components/HomePage.vue')
  },

  {
    path: '/home/book/:bookId', name:'OneBook',
    component: () => import('./components/BookDetails.vue')
  },
  {
    path: '/admin', name:'AdminPage',
    component: () => import('./components/AdminPage.vue')
  },
  {
    path: '/genre', name:'GenrePage',
    component: () => import('./components/GenrePage.vue')
  },
  {
    path: '/admin/create', name:'AdminCreateBook',
    component: () => import('./components/AdminCreateBook.vue')
  },
   {
    path: '/admin/update/:bookId', name:'AdminUpdateBook',
    component: () => import('./components/AdminCreateBook.vue')
  },
  {
    path: '/admin/books', name:'AdminMyBooks',
    component: () => import('./components/AdminMyBooks.vue')
  },
];
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
