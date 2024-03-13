const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      MCP_QA: "https://testusuario.claro.com.do/login",
      MCP_STG: "https://ssofrontend-portal-unico-sso-stg.apps.newprod.prod.cloudapps.claro.com.do/login",
      MCP_PROD: "https://usuario.claro.com.do/login"
    },
    specPattern: "cypress/e2e/**/*.js"
  },
});
