/// <reference types="cypress" />

context('Eventos', () => {
    beforeEach(() => {

        cy.on('uncaught:exception', (err, runnable) => {

            if (err.message.includes("Cannot read properties of null (reading 'style')")) {

                return false;
            }

            return true;
        });
        cy.visit('https://www.dev.comparasoftware.com/eventos');
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    });

    it('Boton Eventos >', () => {
        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(1) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Marketing');
        cy.visit('https://www.dev.comparasoftware.com/eventos');
        
        // cy.get('.active > img').click();
        // cy.get('#sub-menu-events > ul > :nth-child(2) > .text-capitalize').click()
        // cy.get('body').should('contain.text', 'Panel | Servicio Al Cliente');
        //cy.contains('Servicio Al Cliente').should('exist');
        //cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Panel | Servicio Al Cliente');

        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'ERP');
        cy.visit('https://www.dev.comparasoftware.com/eventos');


        // cy.get('.active > img').click();
        // cy.get('#sub-menu-events > ul > :nth-child(4) > .text-capitalize').click(); 
        // cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Gestión De Proyecto'); 
        // cy.visit('https://www.dev.comparasoftware.com/eventos');

        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Contabilidad y finanzas');
        cy.visit('https://www.dev.comparasoftware.com/eventos');

        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Ventas');
        cy.visit('https://www.dev.comparasoftware.com/eventos');

        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Ciberseguridad ');
        cy.visit('https://www.dev.comparasoftware.com/eventos');

        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Mantenimiento');
        cy.visit('https://www.dev.comparasoftware.com/eventos');

        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Supply Chain y Logística');
        cy.visit('https://www.dev.comparasoftware.com/eventos');

        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Gestión');
        cy.visit('https://www.dev.comparasoftware.com/eventos');

        
        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Gestión de TI');
        cy.visit('https://www.dev.comparasoftware.com/eventos');

        
        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Comercio');
        cy.visit('https://www.dev.comparasoftware.com/eventos');

        
        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Recursos Humanos');
        cy.visit('https://www.dev.comparasoftware.com/eventos');


        
        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Diseño');
        cy.visit('https://www.dev.comparasoftware.com/eventos');


        
        cy.get('.active > img').click();
        cy.get('#sub-menu-events > ul > :nth-child(3) > .text-capitalize').click();
        cy.get('#event-box-0 > .content > .info-content > :nth-child(1) > .mb-5').should('contain.text', 'Colaboración y productividad');
        cy.visit('https://www.dev.comparasoftware.com/eventos');

    });
});