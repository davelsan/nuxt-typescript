<template>
  <div class="flex justify-center items-center text-center min-h-screen">
    <div>
      <img
        class="w-64 m-auto nuxt-logo"
        src="~/assets/svg/nuxt-logo.svg"
        alt="Nuxt Logo"
      >
      <h1 class="block font-light text-8xl tracking-wide text-gray-700">
        Nuxt + Typescript
      </h1>
      <h2 class="font-light tracking-normal text-4xl text-gray-600">
        A Starter Nuxt SPA with TypeScript Support
      </h2>
      <div class="pt-10">
        <a
          v-for="item in links"
          :key="item.label"
          :href="item.href"
          :class="item.class"
          class="last:ml-10"
          target="_blank"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api';

    type NuxtLink = {
      href: string;
      class: string;
      label: string;
    }

    export default defineComponent({
      setup () {
        const links: NuxtLink[] = [
          {
            href: 'https://nuxtjs.org/',
            class: 'button--green',
            label: 'Documentation'
          },
          {
            href: 'https://github.com/nuxt/nuxt.js',
            class: 'button--grey',
            label: 'GitHub'
          }
        ];
        return {
          links
        };
      }
    });
</script>

<style lang="postcss">
.nuxt-logo {
  animation: 1s nuxt-logo-anim;
  margin: auto;
}

@keyframes nuxt-logo-anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
