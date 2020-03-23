<h1 align=center> Nuxt + Typescript</h1>

<p align=center> A refactored Nuxt.js starter app with Typescript support </p>

## Overview

This is a basic [Nuxt.js](https://nuxtjs.org/) starter repository configured to support [Typescript](https://www.typescriptlang.org/). Additionally, it uses [Tailwind CSS](https://tailwindcss.com/) for component styling, [ESLint](https://eslint.org/) for error linting, [Jest](https://jestjs.io/) for unit tests and the experimental [@vue/composition-api](https://github.com/vuejs/composition-api) in component scripts.


## Development

This project was created using [pnpm](https://pnpm.js.org/) and the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) tool.

### Build Setup

``` sh
# install dependencies
pnpm install

# serve with hot reload at localhost:3000
pnpm run dev

# run unit tests using jest
pnpm run test

# build for production and launch server
pnpm run build
pnpm run start

# generate static project
pnpm run generate
```

For a detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org/guide#how-it-works).

### Creation Options

```shell
create-nuxt-app v2.15.0
✨ Generating Nuxt.js project in nuxt-typescript
? Project name: nuxt-test
? Project description: Nuxt.js + Typescript
? Author name: David Velasco
? Choose programming language: TypeScript
? Choose the package manager: Yarn
? Choose UI framework: Tailwind CSS
? Choose custom server framework: None (Recommended)
? Choose the runtime for TypeScript: @nuxt/typescript-runtime
? Choose Nuxt.js modules: Progressive Web App (PWA) Support, DotEnv
? Choose linting tools: ESLint
? Choose test framework: Jest
? Choose rendering mode: Single Page App
? Choose development tools: jsconfig.json
```

In addition to the above options, several modifications have been made to the default build to improve tooling support and fix minor issues. For more information, check issue [#448](https://github.com/nuxt/create-nuxt-app/issues/448) in the main [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) repository.

### Additional Notes

#### Jest

The files `home.vue` and `home.spec.ts` have been added as a proof-of-concept on how to test vue components using the experimental `@vue/composition-api` package. For more information, check the excellent [Vue Testing Handbook](https://lmiller1990.github.io/vue-testing-handbook/composition-api.html#the-composition-api) resource, written by [Lachlan Miller](https://github.com/lmiller1990).

#### SVGs

Inline SVG support with typescript is tricky to configure. For now, SVGs can be imported using `<img src="file.svg"/>` tags, via the [@nuxtjs/svg](https://github.com/nuxt-community/svg-module) package, though I could not make it work with `?data` and `?inline` specifiers. Importing `*.svg` files as modules also causes the compiler to complain.

#### Tailwind CSS

The original component `<style>` contents have been modified to leverage Tailwind CSS utility classes where possible, to give the app a similar look and feel to the original. This includes examples of both inline classes and `@apply` directives.

#### *node_modules*

Because `pnpm` does not use a flattened `node_modules` structure by default, the module resolution step may fail if phantom package dependencies are not found at the root folder level.

There are two possible solutions for this: 1) ensure that there are no phantom dependencies in `package.json`, and 2) set the `shamefully-hoist=true` option in `.npmrc`.

For the same reasons that I prefer to use pnpm as the package manager, I'd also prefer to employ the first solution. Unfortunately, this is a decision that only the Nuxt.js maintainers can safely enforce, [though it may be in the horizon](https://github.com/nuxt/create-nuxt-app/issues/367#issuecomment-552384581).
