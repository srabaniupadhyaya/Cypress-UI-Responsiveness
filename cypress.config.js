const { defineConfig } = require("cypress");

module.exports = defineConfig({
    //global view port
    viewportHeight:1000,
    viewportWidth:660,
    video:true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },
});
