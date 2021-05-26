/// <reference types = "cypress" />

export class LoginPage {
    logIn(username, password) {
         cy.get('#username').type(username, { force: true });
         cy.get('#password').type(password, { force: true });
    };
};
