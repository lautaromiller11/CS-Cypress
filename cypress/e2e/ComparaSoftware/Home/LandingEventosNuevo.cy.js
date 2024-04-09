/// <reference types="cypress" />

context('Eventos', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("Cannot read properties of null (reading 'style')")) {
                return false;
            }
            return true;
        });
        cy.visit('https://www.comparasoftware.com/digital-leader');
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    });

    it('Seccion Calendario', () => {
        
    });
});