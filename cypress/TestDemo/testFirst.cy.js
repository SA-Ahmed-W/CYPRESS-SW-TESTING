///<reference types='Cypress'/>
///<reference types='@cypress/xpath'/>

describe('Orangehrm', () => {
  it('login',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
  });
//   it('login',()=>{
//     cy.visit("https://the-internet.herokuapp.com/login")
//     cy.get("#username").type("tomsmith")
//     cy.get("#password").type("SuperSecretPassword!")
//     cy.get("button[type='submit']").click()
//     cy.get(".icon-signout").click()
//   });
})
