describe("Claro Test env URL", ()=>{

    it("Visit MCP QA", ()=>{
        cy.visit(Cypress.env("MCP_PROD"))
    })


})