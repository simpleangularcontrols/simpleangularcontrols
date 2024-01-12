import { defineConfig } from 'cypress';
import coverageWebpack from './cypress/coverage.webpack';

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  reporter: '../../../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    reportDir: '../../reports/bs3',
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
          root: '',
          sourceRoot: 'projects/sac-bootstrap3/src',
          buildOptions: {
            outputPath: 'dist/sac-bootstrap3',
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
