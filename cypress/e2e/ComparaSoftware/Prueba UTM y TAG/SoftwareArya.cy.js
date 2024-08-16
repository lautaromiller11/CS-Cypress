/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of null (reading 'nextElementSibling')")) {
        return false;
    }
    if (err.message.includes("jQuery is not defined")) {
        return false;
    }
    if (err.message.includes("Cannot read properties of undefined (reading 'fn')")) {
        return false;
    }
    if (err.message.includes("NetworkError when attempting to fetch resource.")) {
        return false;
    }
    return true;
});

context('Categoria Plantilla Arya', () => {
    beforeEach(() => {
        cy.visit('https://www.comparasoftware.com.ar/bind-erp');
        cy.viewport(1480, 820);
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("toggleUnselect is not defined")) {
                return false;
            }
            return true;
        });
    });






    it('TAG - "[Product] Cotizar"', () => {
        cy.get('[data-event-options]').should('exist').then($elements => {
            let foundElement = null;
            $elements.each((index, el) => {
                const eventOptions = el.getAttribute('data-event-options');
                console.log(`Element ${index}:`, eventOptions); // Agregar mensaje de depuración
                if (eventOptions) {
                    try {
                        const eventOptionsObj = JSON.parse(eventOptions);
                        console.log(`Parsed event options ${index}:`, eventOptionsObj); // Agregar mensaje de depuración
                        if (eventOptionsObj.u_id === '[Product] Cotizar') {
                            foundElement = Cypress.$(el);
                            return false; // Romper el bucle
                        }
                    } catch (e) {
                        console.error(`Error parsing event options ${index}:`, e); // Agregar mensaje de depuración para errores de parseo
                    }
                }
            });
            expect(foundElement).to.not.be.null;
        });
    });
});









