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
        cy.visit('https://www.comparasoftware.com.ar/software-erp');
        cy.viewport(1480, 820);
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("toggleUnselect is not defined")) {
                return false;
            }
            return true;
        });
    });


    //////////Encontrar elemento por CTA, se necesita correción

    // Validación de elementos por u_id
    it('TAG - "[Product] Top 10"', () => {
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

    //////Encontrar elemento por CTA
    it('CTA - "[Info] Pregunta si"', () => {
        cy.contains('a', 'Sí').click();
        cy.wait(1000);
        cy.get('form:visible').then($forms => {
            cy.wrap($forms).should('have.length', 1);
            cy.wrap($forms[0]).find('input[name="utm_cta"][value="cat btn si header"]').should('exist');
        });
    });

    ///////////////// Encotrar elemento por Etiqueta Tag M
    it('TAG - "[Info] Pregunta si"', () => {
        cy.get('[data-event-options]').then($elements => {
            const foundElement = [...$elements].find(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    return false;
                }
                return eventOptions.u_id === '[Info] Pregunta si';
            });
            expect(foundElement).to.not.be.undefined;
        });
    });

    //////Encontrar elemento por CTA
    it('CTA - "[Info] Pregunta no"', () => {
        cy.contains('a', 'No').click();
        cy.wait(1000);
        cy.get('form:visible').then($forms => {
            cy.wrap($forms).should('have.length', 1);
            cy.wrap($forms[0]).find('input[name="utm_cta"][value="cat btn no header"]').should('exist');
        });
    });


    ///////////////// Encotrar elemento por Etiqueta Tag M
    it('TAG - "[Info] Pregunta no"', () => {
        cy.get('[data-event-options]').then($elements => {
            const foundElement = [...$elements].find(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    return false;
                }
                return eventOptions.u_id === '[Info] Pregunta no';
            });
            expect(foundElement).to.not.be.undefined;
        });
    });

    //////Encontrar elemento por CTA
    it('CTA - "[Product] Cotizar"', () => {
        cy.contains('a', 'Cotizar').click();
        cy.wait(1000);
        cy.get('form:visible').then($forms => {
            cy.wrap($forms).should('have.length', 1);
            cy.wrap($forms[0]).find('input[name="utm_cta"][value="cat btn cotizar"]').should('exist');
        });
    })


    ///////////////// Encotrar elemento por Etiqueta Tag M
    it('TAG - "[Product] Cotizar"', () => {
        const expectedPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        cy.get('[data-event-options]').then($elements => {
            const foundElements = [...$elements].filter(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
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

    //////Encontrar elemento por CTA
    it('CTA - "[Product] Prueba Gratis"', () => {
        cy.contains('Prueba gratis').click();
        cy.wait(1000);
        cy.get('form:visible').then($forms => {
            cy.wrap($forms).should('have.length', 1);
            cy.wrap($forms[0]).find('input[name="utm_cta"][value="cat_btn_solicitar_prueba"]').should('exist');
        });
    })


//    //////Encontrar elemento por CTA
//     it.only('Card Soft - CTA de [Product] Prueba gratis', () => {
//         cy.get('.btn-form').contains('Prueba gratis').click();
//         cy.get('form#form-modal-1Step', { timeout: 10000 }).should('be.visible');
//         cy.get('form#form-modal-1Step')
//             .find('input[name="utm_cta"][value="cat_btn_solicitar_prueba"]')
//             .should('exist');
//     })


    ///////////////// Encotrar elemento por Etiqueta Tag M
    it('TAG - "[Product] Prueba gratis"', () => {
        const expectedPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        cy.get('[data-event-options]').then($elements => {
            const foundElements = [...$elements].filter(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
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


    //////(Falta CTA, hay que corregirla)

    ///////////////// Encotrar elemento por Etiqueta Tag M
    it('TAG - "[Product] Versus"', () => {
        cy.get('button[data-event-options]').should('exist').then($elements => {
            let foundElement = null;
            $elements.each((index, el) => {
                const eventOptions = el.getAttribute('data-event-options');
                if (eventOptions && eventOptions.includes('"u_id":"[Product] Versus"')) {
                    foundElement = Cypress.$(el);
                    return false;
                }
            });
            expect(foundElement).to.not.be.null;
        });
    });



    //////Encontrar elemento por CTA
    it('CTA - "[Product] Mod Comparar"', () => {
        cy.visit('https://www.comparasoftware.com.ar/software-erp');
        cy.get('button[data-cta="cat_btn_comparar"]').should('exist');
    });

    ///////////////// Encotrar elemento por Etiqueta Tag M
    it('TAG - "[Product] Mod Comparar"', () => {
        cy.get('[data-event-options]').then($elements => {
            const foundElement = [...$elements].find(el => {
                let eventOptions;
                try {
                    eventOptions = JSON.parse(el.getAttribute('data-event-options'));
                } catch (e) {
                    return false;
                }
                return eventOptions.u_id === '[Product] Mod Comparar';
            });
            expect(foundElement).to.not.be.undefined;
        });
    });

    //////Encontrar elemento por CTA
    it('CTA - [Banner] Asesoría', () => {
        cy.get('a[data-form="form_soft_solicitar_prueba"]').click();
        cy.get('form')
            .find('input[name="utm_cta"][value="cat_banner_after4"]')
            .should('exist');
    });

    ///////////////// Encotrar elemento por Etiqueta Tag M
    it('TAG - "[Banner] Asesoría"', () => {
        cy.get('a[data-event-options]').should('exist').then($elements => {
            let foundElement = null;
            $elements.each((index, el) => {
                const eventOptions = el.getAttribute('data-event-options');
                if (eventOptions && eventOptions.includes('"u_id":"[Banner] Asesoría"')) {
                    foundElement = Cypress.$(el);
                    return false;
                }
            });
            expect(foundElement).to.not.be.null;
        });
    });
});




