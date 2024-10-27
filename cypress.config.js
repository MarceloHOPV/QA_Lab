const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // Corrigido aqui
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
