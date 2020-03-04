<template>
  <home
    :content="{
      title: 'Nuxt.js',
      stack: [ 'Nuxt', 'Typescript', 'Tailwind CSS' ]
    }"
  />
</template>

<script lang="ts">

import {
  defineComponent,
  computed, ref
} from '@vue/composition-api';

import home from '~/components/home.vue';

export default defineComponent({
  components: {
    home
  }
});
</script>
