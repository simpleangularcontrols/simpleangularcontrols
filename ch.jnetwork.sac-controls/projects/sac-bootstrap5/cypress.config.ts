import { defineConfig } from 'cypress';
import coverageWebpack from './cypress/coverage.webpack';

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  reporter: '../../../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    reportDir: '../../reports/bs5',
    overwrite: false,
    html: false,
    json: true,
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig: coverageWebpack,
      options: {
        projectConfig: {
          root: 'projects/sac-bootstrap5',
          sourceRoot: 'projects/sac-bootstrap5/src',
          buildOptions: {
            outputPath: 'dist/sac-bootstrap5',
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
