<template>
  <div class="sample">
    <div class="row">
      <cv-tile :light="light">
        <h1>Hello</h1>
        <p>This is some tile content</p>
      </cv-tile>
      <cv-tile :light="light">
        <h1>Hello</h1>
        <p>This is some tile content</p>
      </cv-tile>
    </div>
  </div>
</template>

<script>
import 'carbon-components/css/carbon-components.css';

export default {
  name: 'HelloWorld',
  data() {
    return {
      yourName: '',
      visible: false
    };
  },
  methods: {
    onClick() {
      this.visible = true;
    },
    modalClosed() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';

.sample {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 5% auto;
  height: 100%;
}

.cv-text-input {
  margin: 30px 0;
}
</style>
