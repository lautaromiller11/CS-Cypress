/// <reference types="cypress" />

context('Sección Navega por las categorias', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    })

    it('Verificar enlaces de las categorías mas visitadas', () =>{
        cy.get(':nth-child(1) > .flex > .capitalize').click();
        cy.contains('Software CRM').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(2) > .flex > .capitalize').click();
        cy.contains('Plataformas E-learning').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(3) > .flex > .capitalize').click();
        cy.contains('Software Educativo').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(4) > .flex > .capitalize').click();
        cy.contains('Software para Agentes de Seguros').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(5) > .flex > .capitalize').click();
        cy.contains('Software de Administración de Condominios').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(6) > .flex > .capitalize').click();
        cy.contains('Software LMS').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(7) > .flex > .capitalize').click();
        cy.contains('Software de Mesa de Ayuda').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(8) > .flex > .capitalize').click();
        cy.contains('Software Punto de Venta').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(9) > .flex > .capitalize').click();
        cy.contains('Software de Automatización de Marketing').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(10) > .flex > .capitalize').click();
        cy.contains('Software para Restaurante').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(11) > .flex > .capitalize').click();
        cy.contains('Software de Experiencia al Cliente').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(12) > .flex > .capitalize').click();
        cy.contains('Software de Mantenimiento').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(13) > .flex > .capitalize').click();
        cy.contains('Software ERP').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(14) > .flex > .capitalize').click();
        cy.contains('Software de Recursos Humanos').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(15) > .flex > .capitalize').click();
        cy.contains('Software de Recursos Humanos').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(16) > .flex > .capitalize').click();
        cy.contains('Software de Factura electrónica').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get(':nth-child(10) > .home-container > .justify-center > .btn').click();
        cy.contains('¿Qué tipo de software estás buscando?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        
    })
})