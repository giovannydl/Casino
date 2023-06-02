const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demo.casino/",
    viewportWidth: 1300,
    viewportHeight: 660
  },
  
});
