import { defineConfig } from 'cypress';
import coverageWebpack from 'projects/sac-bootstrap3/cypress/coverage.webpack';

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  reporter: './node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    reportDir: 'reports/bs3',
    overwrite: false,
    html: false,
    json: true,
  },

  component: {
    supportFile: 'projects/sac-bootstrap3/cypress/support/component.ts',
    supportFolder: 'projects/sac-bootstrap3/cypress/support',
    indexHtmlFile:
      'projects/sac-bootstrap3/cypress/support/component-index.html',
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig: coverageWebpack,
      options: {
        projectConfig: {
          root: 'projects/sac-bootstrap3',
          sourceRoot: 'projects/sac-bootstrap3/src',
          buildOptions: {
            outputPath: 'dist/sac-bootstrap3',
            main: 'src/entrypoint-cypress.ts',
            tsConfig: 'projects/sac-bootstrap3/tsconfig.lib.json',
          },
        },
      },
    },
    specPattern: 'projects/sac-bootstrap3/src/**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
