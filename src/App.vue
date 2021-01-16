<template>
  <div id="app">
    <tutorial-header />
    <cv-toast-notification
      style="position: fixed; z-index: 99; bottom: 5px; left: 10px;"
      v-if="showUpdateUI"
      :title="title"
      :caption="caption"
      @close="showUpdateUI = false"
    ></cv-toast-notification>
    <cv-content id="#main-content" style="margin-top: 3rem; padding: 0;">
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import TutorialHeader from './components/TutorialHeader';

export default {
  name: 'App',
  components: {
    TutorialHeader
  },
  data() {
    return {
      title: 'Update available',
      caption: 'A newer version of this page is available.'
    };
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpdateUI = true;
      });
    }
  },
  async accept() {
    this.showUpdateUI = false;
    await this.$workbox.messageSW({ type: 'SKIP_WAITING' });
  }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
