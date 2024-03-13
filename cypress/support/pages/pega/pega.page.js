class pega {

    elements = {

        username_input: ()=> cy.get("#user_name"),
        password_input: ()=> cy.get("#user_pass"),
        login_button: ()=> cy.get("#login_button")

    }

}

export const Pega = new pega();