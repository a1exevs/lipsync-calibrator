# Lipsync Calibrator

# Description
Application for calibrating viseme 3D models.

## Yarn version
v1.22.19

## Node version
v18.17.1. Use NVM:
1. nvm current - check current version of Node
2. nvm list - show list of available Node versions
3. nvm install <version> - to install and use Node version.
4. nvm use <version> - set version of Node as current version

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `yarn run start`
This script does the following:
1. Runs `yarn run set-env:prod` to update the `.env` file with production settings.
2. Runs `react-scripts start` to start the application in production mode.
To start the application in production mode, run:
yarn run start

You will see any lint errors in the console.

Runs the app in the production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\

### `yarn run start:dev`
This script does the following:
1. Runs `npm run set-env:dev` to update the `.env` file with development settings.
2. Runs `react-scripts start` to start the application in development mode.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\

### `yarn run set-env:prod`
This script runs the `update-env.js` script with the `prod` argument. It updates the `.env` file with the production configuration settings from `config.json`.

### `yarn run set-env:dev`
This script runs the `update-env.js` script with the `dev` argument. It updates the `.env` file with the development configuration settings from `config.json`.

### `yarn run serve`
Serves a static site (after app building via 'yarn run build:dev').

### `yarn run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\

### `yarn run build:delivery`
Prepares your React app for production by formatting code, fixing lint errors, and creating an optimized build.
1. Formatting: Runs yarn run format.
2. Linting: Executes yarn run lint:fix.
3. Production Build: Uses react-scripts build for a minified, optimized bundle.

### `yarn run check-deps`
### `yarn run upgrade-deps`
Checks/updates available dependencies to the latest version.

### `yarn run format`
Formats code using Prettier for TypeScript, TSX, and CSS, SCSS files.

### `yarn run lint`
Runs ESLint for static code analysis on TypeScript and TSX files.

### `yarn run lint:fix`
Fixes errors found by ESLint in TypeScript and TSX files.

### `yarn run prepare`
Automatically runs after dependencies installation to set up git hooks through husky.

## Repository
Link to repository https://github.com/a1exevs/lipsync-calibrator.
Link to project https://github.com/users/a1exevs/projects/3