
/// <reference types="cypress" />

context('Categorías', () => {
    const categorias = [
        { nombre: 'Hub Marketing', subcategorias: ['Software de Automatización de Marketing', 'Software de Email Marketing', 'Software para Marketing en Redes Sociales'] },
        { nombre: 'Hub Ventas', subcategorias: ['Software CRM', 'Software de Ventas'] },
        { nombre: 'Hub Mantenimiento', subcategorias: ['Software de Mantenimiento', 'Software de Mantenimiento de Equipos Médico', 'Software de Mantenimiento Predictivo'] },
        { nombre: 'Hub ERP', subcategorias: ['Software ERP', 'Software de Producción y Fabricación', 'Software de Gestión de Calidad', 'Software para Inventarios'] },
        { nombre: 'Hub Analitica', subcategorias: ['Software Estadístico', 'Software de Base de Datos', 'Software de Inteligencia de Negocio'] },
        { nombre: 'Recursos Humanos', subcategorias: ['Software de Recursos Humanos', 'Software de Pago de Nómina'] },
        { nombre: 'Contabilidad y Finanzas', subcategorias: ['Software de facturación', 'Software de Firma Electrónica', 'Software de Cobranza'] },
        { nombre: 'Educativo', subcategorias: ['Plataformas E-learning', 'Software Educativo', 'Software LMS'] },
        { nombre: 'Servicio al Cliente', subcategorias: ['Software de Atención al Cliente', 'Software de Chatbot', 'Software de Mesa de Ayuda'] },
        { nombre: 'Gestión', subcategorias: ['Software para Restaurante', 'Software de Construcción', 'Software Médico para Clínicas', 'Software para Veterinarias'] }
    ];

    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    });
    categorias.forEach(categoria => {
        it(`Categorías - ${categoria.nombre}`, () => {
            cy.get('#btn-cat-menu > img').click();
            categoria.subcategorias.forEach((subcategoria, index) => {
                cy.contains(subcategoria).should('exist').click();
                if (index < categoria.subcategorias.length - 1) {
                    cy.get('#btn-cat-menu > img').click();
                    cy.get('.selected > .active').next().click();
                }
                cy.visit('https://www.dev.comparasoftware.com/');
            });
        });
    });
});
