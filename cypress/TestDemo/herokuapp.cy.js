///<reference types='Cypress'/>
///<reference types='@cypress/xpath'/>

describe('Herokuapp', () => {
      it('login',()=>{
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get("button[type='submit']").click()
        cy.get(".icon-signout").click()
      });
    })
    