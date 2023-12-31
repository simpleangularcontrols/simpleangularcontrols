import { defineConfig } from 'cypress';
import coverageWebpack from './cypress/coverage.webpack';

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig: coverageWebpack,
      options: {
        projectConfig: {
          root: 'projects/sac-bootstrap4',
          sourceRoot: 'projects/sac-bootstrap4/src',
          buildOptions: {
            outputPath: 'dist/sac-bootstrap4',
            main: 'src/entrypoint-cypress.ts',
            tsConfig: 'tsconfig.lib.json',
          },
        },
      },
    },
    specPattern: 'src/**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
