/// <reference types="cypress" />

context('Forms', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    })

    it('Categorias - Hub Marketing', () => {
        cy.get('#btn-cat-menu > img').click();
    })
})