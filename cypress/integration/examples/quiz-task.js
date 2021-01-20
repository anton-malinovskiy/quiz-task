
context('As an admin user I would d like to log in to my email account', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('https://login.poczta.home.pl')
  })

  it('should login to mail account with correct credentials', () => {
    cy.get('#username')
        .type('qa.quiz@nsight.pl')
    cy.get('#password')
        .type('Test!123')
    cy.get('.submit')
        .click()
    cy.get('.list-view > [aria-selected="false"]')
        .click()
  })
})