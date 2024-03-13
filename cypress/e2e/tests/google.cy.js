describe("Google", ()=>{

    before("Precondiciones", ()=>{

        cy.fixture("example.json").then((data) =>{
            globalThis.data = data
        })

        // cy.fixture("user.json").then(user =>{
        //     globalThis.userInfo = user
        // })

    })

    it("Visit Google",()=>{

        cy.visit(data.baseUrl)
        cy.log(data.email)
    })


})