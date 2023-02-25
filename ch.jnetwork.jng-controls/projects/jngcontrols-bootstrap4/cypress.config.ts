import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,

  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: false,
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
});
