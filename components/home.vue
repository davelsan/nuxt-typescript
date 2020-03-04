<template>
  <div class="flex justify-center items-center text-center min-h-screen">
    <div>
      <img
        class="NuxtLogo m-auto"
        src="~/assets/svg/nuxt-logo.svg"
        alt="Nuxt Logo"
      >
      <h1 class="block font-light text-gray-800 tracking-widest text-8xl">
        {{ content.title }}
      </h1>
      <h2 class="font-light tracking-wide text-5xl text-gray-600">
        {{ content.stack.join(' + ') }}
      </h2>
      <div class="pt-10">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, computed, ref } from '@vue/composition-api';

interface Content {
  title: string;
  stack: string[];
}

export default defineComponent({
  props: {
    content: {
      type: Object as () => Content,
      default: () => {
        return {
          title: 'Nuxt.js',
          stack: ['Nuxt.js', 'Typescript']
        };
      }
    }
  }
});
</script>

<style lang="postcss">

.NuxtLogo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
