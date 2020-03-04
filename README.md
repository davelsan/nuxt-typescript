<h1 align=center> Nuxt + Typescript</h1>

<p align=center> A recreated Nuxt.js starter app with Typescript support </p>

## Overview

This is a basic [Nuxt.js](https://nuxtjs.org/) starter repository configured to support [Typescript](https://www.typescriptlang.org/). Additionally, it uses [Tailwind CSS](https://tailwindcss.com/) for component styling, [ESLint](https://eslint.org/) for error linting and [Jest](https://jestjs.io/) for unit tests.


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

Option            | Choice
----------------- | ------------
UI Framework      | Tailwind CSS
Server Framework  | None
Nuxt.js Modules   | PWA, DotEnv
Linting Tools     | ESLint
Test Framework    | Jest
Rendering Mode    | Single Page App
Development Tools | jsconfig.json


### Additional Notes

#### Inline SVGs

Inline SVG support with typescript is tricky to configure. For now, SVGs can be imported using `<img src="file.svg"/>` tags, via the [@nuxtjs/svg](https://github.com/nuxt-community/svg-module) package, though I could not make it work with `?data` and `?inline` specifiers. Importing `*.svg` files as modules also causes the compiler to complain.

#### Jest

To test regular `*.ts` files, in addition to `*.vue` components, Jest has been configured to use [ts-jest](https://github.com/kulshekhar/ts-jest). Both `*.spec.{js,ts}` files are supported.

#### *node_modules*

Because `pnpm` does not use a flattened `node_modules` structure by default, the module resolution step may fail if certain package dependencies are not found at the root folder level.

There are two possible solutions for this: 1) ensure that there are no phantom dependencies in `package.json`, and 2) set the `shamefully-hoist=true` option in `.npmrc`.

For the same reasons that I prefer to use pnpm as the package manager, I'd also prefer to employ the first solution. Unfortunately, this is a decision that only the Nuxt.js maintainers can safely enforce, [though it may be in the horizon](https://github.com/nuxt/create-nuxt-app/issues/367#issuecomment-552384581).
