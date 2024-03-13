const { Pega } = require("../../support/pages/pega/pega.page")


describe("Pega Test Suite", ()=>{

    before("Load data", ()=>{
        cy.fixture("user.json").then(userData =>{
            globalThis.user = userData
        })
    })

    it("Pega Test", ()=>{


        cy.visit("https://training.openspan.com/login")
        cy.login(user.username, user.password)

    })


})