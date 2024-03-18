describe("API Testing Examples", ()=>{

it("API Test", ()=>{

    const arrayObjets = [{"key":"Rafael"},{"key2":"Mejia"},{"key3":"Solano"}]

    cy.log(arrayObjets[0].key)
    cy.log(arrayObjets[1].key2)
    cy.log(arrayObjets[2].key3)

})

})