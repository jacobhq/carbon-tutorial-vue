import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage';
import { domain, clientId } from '../auth_config.json';
import { Auth0Plugin } from './auth';

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});
Vue.use(Router);

Vue.config.productionTip = false;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/repos',
      name: 'repo-page',
      // route level code-splitting
      // this generates a separate chunk (repo-page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "repo-page" */ './views/RepoPage')
    },
    {
      path: '/app',
      name: 'app-page',
      component: () => import('./views/AppPage')
    },
    {
      path: '/profile',
      name: 'profile-page',
      component: () => import('./views/ProfilePage')
    }
  ]
});
