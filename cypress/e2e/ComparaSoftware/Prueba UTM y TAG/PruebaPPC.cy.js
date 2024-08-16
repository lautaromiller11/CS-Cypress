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

context('Categoria Plantilla PPC', () => {
    beforeEach(() => {
        cy.visit('https://www.comparasoftware.com.ar/veterinario');
        cy.viewport(1480, 820);
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("toggleUnselect is not defined")) {
                return false;
            }
            return true;
        });
    });

    // Validación de elementos por u_id

    it('Navbar - "[Product] Top 10"', () => {
        const expectedPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        cy.get('[data-event-options]').then($elements => {
            const foundElements = [...$elements].filter(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    // Si el JSON es inválido, ignoramos este elemento
                    return false;
                }
                return eventOptions.u_id === '[Product] Top 10';
            });

            expectedPositions.forEach(position => {
                const element = foundElements.find(el => {
                    const eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                    return eventOptions.position_ID === position.toString();
                });
                expect(element).to.not.be.undefined;
            });
        });
    });

    it('Encontrar el elemento con u_id="[Info] Pregunta si"', () => {
        cy.get('[data-event-options]').then($elements => {
            const foundElement = [...$elements].find(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    // Si el JSON es inválido, ignoramos este elemento
                    return false;
                }
                return eventOptions.u_id === '[Info] Pregunta si';
            });
            // Aserción para verificar que el elemento fue encontrado
            expect(foundElement).to.not.be.undefined;
        });
    });

    it('Encontrar el elemento con u_id="[Info] Pregunta no"', () => {
        cy.get('[data-event-options]').then($elements => {
            const foundElement = [...$elements].find(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    // Si el JSON es inválido, ignoramos este elemento
                    return false;
                }
                return eventOptions.u_id === '[Info] Pregunta no';
            });
            // Aserción para verificar que el elemento fue encontrado
            expect(foundElement).to.not.be.undefined;
        });
    });

    it('Card Soft - "[Product] Cotizar"', () => {
        const expectedPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        cy.get('[data-event-options]').then($elements => {
            const foundElements = [...$elements].filter(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    // Si el JSON es inválido, ignoramos este elemento
                    return false;
                }
                return eventOptions.u_id === '[Product] Cotizar';
            });
            expectedPositions.forEach(position => {
                const element = foundElements.find(el => {
                    const eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                    return eventOptions.position_ID === position.toString();
                });
                expect(element).to.not.be.undefined;
            });
        });
    });
    
    it('Card Soft - "[Product] Prueba gratis"', () => {
        const expectedPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        cy.get('[data-event-options]').then($elements => {
            const foundElements = [...$elements].filter(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    // Si el JSON es inválido, ignoramos este elemento
                    return false;
                }
                return eventOptions.u_id === '[Product] Prueba gratis';
            });
            expectedPositions.forEach(position => {
                const element = foundElements.find(el => {
                    const eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                    return eventOptions.position_ID === position.toString();
                });
                expect(element).to.not.be.undefined;
            });
        });
    });

    it('Encontrar el elemento con u_id="[Product] Versus"', () => {
        cy.get('[data-event-options]').then($elements => {
            const foundElement = [...$elements].find(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    // Si el JSON es inválido, ignoramos este elemento
                    return false;
                }
                return eventOptions.u_id === '[Product] Versus';
            });
            // Aserción para verificar que el elemento fue encontrado
            expect(foundElement).to.not.be.undefined;
        });
    });

    it('Encontrar el elemento con u_id="[Product] Mod Comparar"', () => {
        cy.get('[data-event-options]').then($elements => {
            const foundElement = [...$elements].find(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    // Si el JSON es inválido, ignoramos este elemento
                    return false;
                }
                return eventOptions.u_id === '[Product] Mod Comparar';
            });
            // Aserción para verificar que el elemento fue encontrado
            expect(foundElement).to.not.be.undefined;
        });
    });

});


