import { defineConfig } from 'cypress';
import coverageWebpack from 'projects/sac-bootstrap4/cypress/coverage.webpack';

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  reporter: './node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    reportDir: 'reports/bs4',
    overwrite: false,
    html: false,
    json: true,
  },

  component: {
    supportFile: 'projects/sac-bootstrap4/cypress/support/component.ts',
    supportFolder: 'projects/sac-bootstrap4/cypress/support',
    indexHtmlFile:
      'projects/sac-bootstrap4/cypress/support/component-index.html',
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
            tsConfig: 'projects/sac-bootstrap4/tsconfig.lib.json',
          },
        },
      },
    },
    specPattern: 'projects/sac-bootstrap4/src/**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
