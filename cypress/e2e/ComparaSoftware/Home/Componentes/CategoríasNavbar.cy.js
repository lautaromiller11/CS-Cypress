/// <reference types="cypress" />

context('Categorías', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    })

    it('Categorias - Hub Marketing', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('.selected > .active').click();
        cy.contains('Software de Automatización de Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('.selected > :nth-child(2)').click();
        cy.contains('Software de Email Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('.selected > :nth-child(3)').click();
        cy.contains('Software para Marketing en Redes Sociales en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        //cy.get('#cat-top10-list').should('have.length', 10);
    })

    it('Categorias - Hub Ventas', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="1"]').click();
        cy.get('.sub-cat-1 > .active > .w-full').click();
        cy.contains('Software CRM en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="1"]').click();
        cy.get('.sub-cat-1 > :nth-child(2)').click();
        cy.contains('Software de Ventas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    it('Categorias - Hub Mantenimiento', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > .active').click();
        cy.contains('Software de Mantenimiento en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(2)').click();
        cy.contains('Software de Mantenimiento de Equipos Médico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(3)').click();
        cy.contains('Software de Mantenimiento Predictivo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    it('Categorias - Hub ERP', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > .active').click();
        cy.contains('Software ERP en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(2)').click();
        cy.contains('Software de Producción y Fabricación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(3)').click();
        cy.contains('Software de Gestión de Calidad en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(4)').click();
        cy.contains('Software para Inventarios en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    it('Categorias - Hub Analitica', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > .active').click();
        cy.contains('Software Estadístico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(2)').click();
        cy.contains('Software de Base de Datos en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(3)').click();
        cy.contains('Software de Inteligencia de Negocio en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    it('Categorías Hub - Recursos Humanos', () => {
        // cy.get('#btn-cat-menu > img').click();
        // cy.get('[data-pos="5"]').click();
        // cy.get('.sub-cat-5 > .active').click();
        // cy.contains('Software de Gestión de Desempeño Empresarial en México').should('exist');
        // cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="5"]').click();
        cy.get('.sub-cat-5 > :nth-child(2)').click();
        cy.contains('Software de Recursos Humanos en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="5"]').click();
        cy.get('.sub-cat-5 > :nth-child(3)').click();
        cy.contains('Software de Pago de Nómina en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    it('Categorias Hub - Contabilidad y Finanzas', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > .active').click();
        cy.contains('Software de facturación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(2)').click();
        cy.contains('Software de Firma Electrónica en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(3)').click();
        cy.contains('Software de Cobranza en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    it('Categorias Hub - Educativo', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > .active').click();
        cy.contains('Plataformas E-learning en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(2)').click();
        cy.contains('Software Educativo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(3)').click();
        cy.contains('Software LMS en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    it('Categorias Hub - Servicio al Cliente', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > .active').click();
        cy.contains('Software de Atención al Cliente en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(2)').click();
        cy.contains('Software de Chatbot en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(3)').click();
        cy.contains('Software de Mesa de Ayuda en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');

    })
    it.only('Categorias Hub - Gestión', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > .active').click();
        cy.contains('Software para Restaurante en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(2)').click();
        cy.contains('Software de Construcción en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(3)').click();
        cy.contains('Software Médico para Clínicas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(4)').click();
        cy.contains('Software para Veterinarias en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

})