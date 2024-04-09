/// <reference types="cypress" />

context('Campo Buscar', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    })

    it('Campo Buscar - Home', () =>{
        cy.get('#search-bar').type('Raptor Web Experience');
        cy.get('li > .relative').should('contain', 'Raptor Web Experience');
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.get('#search-bar').type('Ventas');
        cy.get('#results').should('contain', 'Ventas');
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.get('#search-bar').type('Software CRM');
        cy.get('#results').should('contain', 'CRM');
    })
})