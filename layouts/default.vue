<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="postcss">
html {
  @apply box-border;
  @apply font-sans tracking-wide antialiased;
}

.button--green {
  @apply inline-block py-3 px-6;
  @apply border border-green-700 rounded;
  @apply text-green-700;
}

.button--green:hover {
  @apply text-white bg-green-700;
}

.button--grey {
  @apply inline-block py-3 px-6;
  @apply border border-gray-700 rounded;
  @apply text-gray-700;
}

.button--grey:hover {
  @apply text-white bg-gray-700;
}
</style>
