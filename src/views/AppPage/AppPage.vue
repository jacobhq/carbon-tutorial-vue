<template>
  <div class="sample">
    <cv-accordion>
      <cv-accordion-item :open="open == 1">
        <template slot="title"
          >Create your first repo
        </template>
        <template slot="content">
          <p>
            Create a repo by hitting the create button in the navbar.
          </p>
        </template>
      </cv-accordion-item>
      <cv-accordion-item>
        <template slot="title"
          >Section 2 title</template
        >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </template>
      </cv-accordion-item>
      <cv-accordion-item>
        <template slot="title"
          >Section 3 title</template
        >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </template>
      </cv-accordion-item>
      <cv-accordion-item>
        <template slot="title"
          >Section 4 title</template
        >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </template>
      </cv-accordion-item>
    </cv-accordion>
  </div>
</template>

<script>
import 'carbon-components/css/carbon-components.css';

export default {
  name: 'HelloWorld',
  data() {
    return {
      yourName: '',
      visible: false,
      open: 1
    };
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

template[slot="title"], .bx--accordion__title {
    font-weight: 600;
}
</style>
