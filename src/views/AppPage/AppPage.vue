<template>
  <div class="sample">
    <div>
      <h1 class="app-page__heading">Welcome</h1>
      <cv-progress :initial-step="initialStep" :steps="steps"></cv-progress>
      <br />
      <div>
        <div v-show="initialStep = 0">
          <h3 class="app-page_onboarding_heading">Set up your profile</h3>
          <p class="app-page_onboarding_info">
            Head over to your profile by hitting the account icon in the navbar.
          </p>
          <cv-button @click="actionClick">
            Set up profile
          </cv-button>
        </div>
        <div v-show="initialStep = 1">
          <h3 class="app-page_onboarding_heading">Create a repo</h3>
          <p class="app-page_onboarding_info">
            Create a repo by hitting the create button in the navbar.
          </p>
        </div>
      </div>
      <cv-accordion v-show="false">
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
        <cv-accordion-item :open="open == 2">
          <template slot="title"
            >Section 2 title</template
          >
          <template slot="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </template>
        </cv-accordion-item>
        <cv-accordion-item :open="open == 3">
          <template slot="title"
            >Section 3 title</template
          >
          <template slot="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </template>
        </cv-accordion-item>
        <cv-accordion-item :open="open == 4">
          <template slot="title"
            >Section 4 title</template
          >
          <template slot="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </template>
        </cv-accordion-item>
      </cv-accordion>
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
      visible: false,
      open: 1,
      initialStep: null,
      steps: ['Set up profile', 'Create repo', 'Push code']
    };
  },
  computed: {
      step() {
          return this.initialStep = this.$store.state.onboarding
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

template[slot='title'],
.bx--accordion__title {
  font-weight: 600;
}

.app-page__heading {
  @include carbon--type-style('productive-heading-07');
}

.app-page_onboarding_heading {
  @include carbon--type-style('productive-heading-04');
  margin-bottom: 0.25rem;
}

.app-page_onboarding_info {
  margin-bottom: 0.75rem;
}
</style>
