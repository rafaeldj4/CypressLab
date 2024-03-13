// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --

const { Pega } = require("./pages/pega/pega.page")

// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
    Cypress.Commands.add("login",(username, password)=>{
        Pega.elements.username_input().type(username)
        Pega.elements.password_input().type(password)
        Pega.elements.login_button().click()
    })

//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })