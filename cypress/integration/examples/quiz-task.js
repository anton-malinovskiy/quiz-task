import { LoginPage } from "../../support/commands";

const loginPage = new LoginPage();

context('As an admin user I would d like to log in to my email account', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit(Cypress.env("url"))
  })

  it('should login to mail account with correct credentials', function() {
    loginPage.logIn(Cypress.env("username"), Cypress.env("password"))

    cy.get('.submit').click().wait(8000)
    cy.get('.body').should('be.visible')
  })
})
