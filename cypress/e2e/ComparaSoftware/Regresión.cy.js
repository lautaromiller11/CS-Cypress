/// <reference types="cypress" />

function generarCorreoElectronico() {
    const cadenaAleatoria = Math.random().toString(36).substring(7);
    const correoElectronico = `usuario_${cadenaAleatoria}@ejemplo.com`;
    return correoElectronico;
}
context('Regresión', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
        cy.wait(2000);
    })

    /// Test Criticos del Home ///

    //Boton Solcitar Asesoria sin costo en el navbar
    it('Boton "soliciar asesoria sin costo" en el navbar', () => {
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
    })

    //Boton Registrar mi Producto - Soy fabricante de software
    it('Boton Registrar mi Producto - Soy fabricante de software', () => {
        const correoElectronico = generarCorreoElectronico();
        cy.get('#btn-register-box').click();
        cy.get('#register-box > [href="/panel-usuario/register"]').click();
        cy.wait(2000);
        const stub = cy.stub()
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('ResizeObserver')) {
                stub()
                return false
            }
        })
        cy.get(':nth-child(1) > .border').type('Nombre');
        cy.get('.grid > :nth-child(2) > .border').type('Apellido');
        cy.get(':nth-child(3) > .border').type(correoElectronico);
        cy.get(':nth-child(4) > .border').type('+54923332323');
        cy.get(':nth-child(5) > .border').type(123456);
        cy.get(':nth-child(6) > .border').type(123456);
        cy.get('.rounded').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .border').type('Soft Nombre');
        cy.get('select').select('Español');
        cy.get('.border-2').click();
        cy.get(':nth-child(3) > .flex > span').click();
        cy.get(':nth-child(2) > :nth-child(2) > .el-scrollbar > .el-scrollbar__wrap > .el-scrollbar__view > :nth-child(8)').click();
        cy.get('.dialog-footer > .bg-blue-compara-bg-color').click();
        cy.get('.mb-6.text-sm > :nth-child(4) > .border').type('Test ¿qué es y para qué sirve?');
        cy.get('button.bg-blue-compara-bg-color').click();
        cy.wait(2000);
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    //Registrar mi Producto - Soy Partner de Software
    it('Registrar mi Producto - Soy Partner de Software', () => {
        const correoElectronico = generarCorreoElectronico();
        cy.get('#btn-register-box > img').click();
        cy.get('[href="/panel-usuario/partner-register"] > span').click();
        cy.wait(2000);
        const stub = cy.stub()
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('ResizeObserver')) {
                stub()
                return false
            }
        })
        cy.get(':nth-child(1) > .border').type('Nombre');
        cy.get('.grid > :nth-child(2) > .border').type('Apellido');
        cy.get(':nth-child(3) > .border').type(correoElectronico);
        cy.get(':nth-child(4) > .border').type('+5491212121');
        cy.get(':nth-child(5) > .border').type('123456');
        cy.get(':nth-child(6) > .border').type('123456');
        cy.get('.rounded').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .border').type('Nombre Partner');
        cy.get('.mb-6 > :nth-child(2) > .border').type('Descripción del partner');
        cy.get('select').select('Español');
        cy.get('button.bg-blue-compara-bg-color').click();
        cy.wait(2000);
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    /// Seccion Buscador 
    it('Campo Buscar - Home', () => {
        cy.get('#search-bar').type('Raptor Web Experience');
        cy.get('li > .relative').should('contain', 'Raptor Web Experience');
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.get('#search-bar').type('Ventas');
        cy.get('#results').should('contain', 'Ventas');
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.get('#search-bar').type('Software CRM');
        cy.get('#results').should('contain', 'CRM');
    })

    // Seccion "Impulsamos la digitalizacion empresarial"
    //Primer Form Solicitar asesoria
    it('Seccion "Impulsamos la digitalizacion empresarial"', () => {
        cy.get(':nth-child(2) > :nth-child(2) > .flex > .btn').click();
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

        //Segundo Form Solicitar asesoria
        cy.get('.home-container > .flex-col > .btn').click();
        cy.get('#firstname').type('Nombre Test');
        cy.get('#phone').type('341665553');
        cy.get('#company').type('Empresa Test');
        cy.get('#email').type('empresatest@gmail.com');
        cy.get('#hubInput > .select-form').click();
        cy.get('#hubInput > .select-form').click();
        cy.get('#cat-Marketing > #cat-name').click();
        cy.get('[data-value="Email Marketing"]').click();
        cy.get('#end-btn').click();
    })

    // Sección "Un desarrollador, varias soluciones
    it('Sección "Un desarrollador, varias soluciones" | Cards Softwares', () => {
        ////
        cy.get('[href="/salesforce-servicio-cloud"] > img').click();
        cy.contains('Salesforce Service Cloud').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.get('[href="/salesforce-commerce-digital"] > img').click();
        cy.contains('Salesforce Commerce').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.get('[href="/salesforce-live-agent"] > img').click();
        cy.contains('Salesforce Live Agent').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('.home-container > .justify-between > :nth-child(1) > .text-sm').click();
        cy.contains('Salesforce CRM').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        ///////
        cy.get('[href="/zoho-recruit-es"] > img').click();
        cy.contains('Zoho Recruit').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('[href="/zoho-cliq-es"] > img').click();
        cy.contains('Zoho Cliq').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('[href="/zoho-assist-es"] > img').click();
        cy.contains('Zoho Assist').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('.justify-between > :nth-child(2) > .text-sm').click();
        cy.contains('Zoho CRM').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        // //////
        cy.get('[href="/monday-crm-es"] > img').click();
        cy.contains('Monday Sales CRM').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('[href="/monday-dev-es"] > img').click();
        cy.contains('Monday Dev').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('a[href="/monday"]').first().click();
        cy.contains('monday.com').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('.home-container > .justify-between > :nth-child(3) > .text-sm').click();
        cy.contains('monday.com').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        /////////
        cy.get('[href="/zendesk-sunshine-es"] > img').click();
        cy.contains('Zendesk Sunshine').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('[href="/zendesk-sell"] > img').click();
        cy.contains('Zendesk Sell').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('[href="/zendesk-support"] > img').first().click();
        cy.contains('Zendesk Suite').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('.justify-between > :nth-child(4) > .text-sm').click();
        cy.contains('Zendesk Suite').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    // Cards Registro, Seccion publicar un Software
    it('Cards Registro, Seccion publicar un Software - Fabricante Soft', () => {
        const correoElectronico = generarCorreoElectronico();
        cy.get('.justify-between > .btn').click();
        cy.wait(2000);
        const stub = cy.stub()
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('ResizeObserver')) {
                stub()
                return false
            }
        })
        cy.get(':nth-child(1) > .border').type('Nombre');
        cy.get('.grid > :nth-child(2) > .border').type('Apellido');
        cy.get(':nth-child(3) > .border').type(correoElectronico);
        cy.get(':nth-child(4) > .border').type('+54923332323');
        cy.get(':nth-child(5) > .border').type(123456);
        cy.get(':nth-child(6) > .border').type(123456);
        cy.get('.rounded').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .border').type('Soft Nombre');
        cy.get('select').select('Español');
        cy.get('.border-2').click();
        cy.get(':nth-child(3) > .flex > span').click();
        cy.get(':nth-child(2) > :nth-child(2) > .el-scrollbar > .el-scrollbar__wrap > .el-scrollbar__view > :nth-child(8)').click();
        cy.get('.dialog-footer > .bg-blue-compara-bg-color').click();
        cy.get('.mb-6.text-sm > :nth-child(4) > .border').type('Test ¿qué es y para qué sirve?');
        cy.get('button.bg-blue-compara-bg-color').click();
        cy.wait(2000);
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    it('Cards Registro, Seccion publicar un Software - Partner', () => {
        const correoElectronico = generarCorreoElectronico();
        cy.get('.xl\\:w-\\[385px\\].justify-start > .btn.btn-primary.font-medium').click();
        cy.wait(2000);
        const stub = cy.stub()
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('ResizeObserver')) {
                stub()
                return false
            }
        })
        cy.get(':nth-child(1) > .border').type('Nombre');
        cy.get('.grid > :nth-child(2) > .border').type('Apellido');
        cy.get(':nth-child(3) > .border').type(correoElectronico);
        cy.get(':nth-child(4) > .border').type('+5491212121');
        cy.get(':nth-child(5) > .border').type('123456');
        cy.get(':nth-child(6) > .border').type('123456');
        cy.get('.rounded').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .border').type('Nombre Partner');
        cy.get('.mb-6 > :nth-child(2) > .border').type('Descripción del partner');
        cy.get('select').select('Español');
        cy.get('button.bg-blue-compara-bg-color').click();
        cy.wait(2000);
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    //Seccion Navega por las categorías de software más visitadas

    //Agregar solo 2 categoria por fila

    it('Verificar enlaces de las categorías mas visitadas', () => {
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
        cy.contains(':nth-child(11) > .home-container > .justify-center > .btn', 'Ver todas las categorías').click();
        cy.contains('¿Qué tipo de software estás buscando?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })


    //Casos Criticos Soft Arya

    context('Perfil de Sotfware - Arya', () => {
        beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/bind')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
        cy.wait(2000);
        })
    })
    ///////Navbar
    it('Boton "soliciar asesoria sin costo" en el navbar', () => {
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
    })
})