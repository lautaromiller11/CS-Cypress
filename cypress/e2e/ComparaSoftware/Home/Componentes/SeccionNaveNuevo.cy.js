/// <reference types="cypress" />

context('Sección Navega por las categorias', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    })

    it('Verificar enlaces de las categorías mas visitadas', () =>{
        const categorias = [
            'Software CRM',
            'Plataformas E-learning',
            'Software Educativo',
            'Software para Agentes de Seguros',
            'Software de Administración de Condominios',
            'Software LMS',
            'Software de Mesa de Ayuda',
            'Software Punto de Venta',
            'Software de Automatización de Marketing',
            'Software para Restaurante',
            'Software de Experiencia al Cliente',
            'Software de Mantenimiento',
            'Software ERP',
            'Software de Recursos Humanos',
            'Software de Factura electrónica'
        ];

        categorias.forEach((categoria, index) => {
            cy.get(`:nth-child(${index + 1}) > .flex > .capitalize`).click();
            cy.contains(categoria).should('exist');
            cy.visit('https://www.dev.comparasoftware.com/');
        });

        cy.get(':nth-child(10) > .home-container > .justify-center > .btn').click();
        cy.contains('¿Qué tipo de software estás buscando?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })
})