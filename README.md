This project was created as an interview challenge for (Applifting)[https://applifting.cz/]

The demo of the app can be found [here](https://applifting-task.now.sh/).

## Project setup

This project uses [prettier](https://prettier.io/) for code formatting and [eslint](https://eslint.org/) for static code analysis. Usage of both tools and their configuration are enforced by a **pre-commit hook**.

The order of the imports in each folder is as follows:

- 3rd party libraries
- constants, functions and types (.ts files)
- react components (.tsx files)

## Running the project

In order to run the project [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) need to be installed.

### yarn start

Runs the app in the development mode.

### yarn build

Build the app for production.

### yarn test

Runs the available tests.

## Used libraries

On top of the required libraries, this project also utilizes several others:

- [styled-components](https://styled-components.com/): Component based approach to CSS styling
- [axios](https://github.com/axios/axios): Client for communication with BE
- [@reach/router](https://reach.tech/router): Simple router for react
- [uuid](https://www.npmjs.com/package/uuid): UUID generator
- [throttle-debounce](https://www.npmjs.com/package/throttle-debounce): Collection of utils for throttling and debouncing functions
- [reselect](https://github.com/reduxjs/reselect): Library for creating memoized and composable redux selectors

## Folder structure

Components connected to the Router can be found in the `pages` folder.

The `components` folder contains:

- Folder for each page component with page specific components. These are lowercase.
- Components shared accross the pages. These are always capitalized.

Tests are contained in a standalone folder labeled `__tests__` which is always inside the folder to which it related.
