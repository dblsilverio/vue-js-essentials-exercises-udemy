import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

import store from './store';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/', component: ImageList
    },
    {
      path: '/oauth2/callback', component: AuthHandler
    },
    {
      path: '/upload', component: UploadForm
    }
  ],
  mode: 'history'
});

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});