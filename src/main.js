// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Home from './components/Home';
import TimeEntries from './components/TimeEntries';
import LogTime from './components/LogTime';
import App from './App';

Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.config.productionTip = false;

const routes = [{
  path: '/home',
  component: Home,
}, {
  path: '/time-entries',
  component: TimeEntries,
  children: [
      { path: 'log-time', component: LogTime },
  ],
}, {
  path: '/time-entries/log-time2',
  component: { template: '<div>root component</div>' },
}];
/* eslint-disable no-new */
const router = new VueRouter({ routes });

// Pointing routes to the components they should use


new Vue({
  router,
  components: {
    App,
  },

}).$mount('#app');
