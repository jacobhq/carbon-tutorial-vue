<template>
  <div>
    <cv-header aria-label="Carbon tutorial">
      <cv-skip-to-content href="#main-content"
        >Skip to content</cv-skip-to-content
      >

      <cv-header-name href="/" prefix="Desica">Git</cv-header-name>

      <cv-header-nav aria-label="Carbon tutorial nav">
        <cv-header-menu-item to="/repos">Repositories</cv-header-menu-item>
      </cv-header-nav>

      <template slot="header-global">
        <cv-header-global-action aria-label="New repository">
          <add-20 />
        </cv-header-global-action>
        <cv-header-global-action aria-label="Notifications">
          <notification-20 />
        </cv-header-global-action>
        <cv-header-global-action
          aria-label="User avatar"
          @click="toast = !toast"
        >
          <user-avatar-20 />
        </cv-header-global-action>
        <cv-header-global-action aria-label="App switcher">
          <app-switcher-20 />
        </cv-header-global-action>
      </template>
    </cv-header>
    <cv-tile kind="standard" :light="light" v-show="toast">
      <div class="flex">
        <user-avatar-32 />
        <h1 class="toast__heading">Hello</h1>
      </div>
      <br />
      <div v-if="!$auth.loading">
        <cv-button
          v-if="!$auth.isAuthenticated"
          @click="login"
          style="width: 100%"
          >Log in</cv-button
        >
        <cv-button
          v-if="$auth.isAuthenticated"
          @click="logout"
          kind="danger"
          style="width: 100%"
          >Log out</cv-button
        >
      </div>
      <div v-else>
        <cv-button-skeleton style="width: 100%"></cv-button-skeleton>
      </div>
    </cv-tile>
  </div>
</template>

<script>
import Add20 from '@carbon/icons-vue/es/add--alt/20';
import Notification20 from '@carbon/icons-vue/es/notification/20';
import UserAvatar20 from '@carbon/icons-vue/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';
import UserAvatar32 from '@carbon/icons-vue/es/user--avatar/32';

export default {
  name: 'TutorialHeader',
  components: {
    Notification20,
    UserAvatar20,
    AppSwitcher20,
    UserAvatar32,
    Add20
  },
  data() {
    return {
      toast: false
    };
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';

.cv-tile {
  z-index: 9999;
  position: fixed !important;
  top: 3.5rem;
  right: 0.5rem;
  width: 20vw;
}

.flex {
  display: flex;
}

.toast__heading {
  @include carbon--type-style('productive-heading-04');
  margin-top: -2px;
  margin-left: 5px;
}
</style>
