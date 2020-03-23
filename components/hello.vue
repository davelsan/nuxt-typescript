<template>
  <div>
    <div class="message">
      {{ uppercasedMessage }}
    </div>
    <div class="count">
      Count: {{ state.count }}
    </div>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<script>
    import Vue from 'vue';
    import CompositionApi, { reactive, computed } from '@vue/composition-api';

    Vue.use(CompositionApi);

    export default {
      name: 'Hello',

      props: {
        message: {
          type: String,
          default: 'Hello, World!'
        }
      },

      setup (props) {
        const state = reactive({
          count: 0
        });

        const increment = () => {
          state.count += 1;
        };

        return {
          state,
          increment,
          uppercasedMessage: computed(() => props.message.toUpperCase())
        };
      }
    };
</script>
