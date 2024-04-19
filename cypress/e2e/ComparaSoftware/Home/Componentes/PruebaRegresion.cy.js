context('Regresión', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com');
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
        cy.wait(2000);
    });

    // Test Críticos del Home

    // Boton Solicitar Asesoria sin costo en el navbar
    it('Boton "Solicitar asesoría sin costo" en el navbar', () => {
        cy.contains('Solicitar asesoría sin costo').click();
        cy.get('#firstname').type('Nombre Test');
        cy.get('#phone').type('341665553');
        cy.get('#company').type('Empresa Test');
        cy.get('#email').type('empresatest@gmail.com');
        cy.get('#hubInput > .select-form').click();
        cy.get('#hubInput > .select-form').click();
        cy.get('#cat-Marketing > #cat-name').click();
        cy.get('[data-value="Email Marketing"]').click();
        cy.get('#end-btn').click();
        cy.get('.modal-body > .flex > div > .btn').click();
    });


    // Casos Críticos Soft Arya
    context('Perfil de Software - Arya', () => {
        it('Boton "Solicitar asesoría sin costo" en el navbar', () => {
            cy.visit('https://www.dev.comparasoftware.com/bind');
            cy.contains('Solicitar asesoría sin costo').click();
            cy.get('#firstname').type('Nombre Test');
            cy.get('#phone').type('341665553');
            cy.get('#company').type('Empresa Test');
            cy.get('#email').type('empresatest@gmail.com');
            cy.get('#hubInput > .select-form').click();
            cy.get('#hubInput > .select-form').click();
            cy.get('#cat-Marketing > #cat-name').click();
            cy.get('[data-value="Email Marketing"]').click();
            cy.get('#end-btn').click();
            cy.get('.modal-body > .flex > div > .btn').click();
        });
    });

    
});
