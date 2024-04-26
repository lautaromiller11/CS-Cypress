/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of null (reading 'nextElementSibling')")) {
        return false
    }
    return true
})


function generarCorreoElectronico() {
    const cadenaAleatoria = Math.random().toString(36).substring(7);
    const correoElectronico = `usuario_${cadenaAleatoria}@ejemplo.com`;
    return correoElectronico;
}


context('Home', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
        cy.wait(2000);
    })
     ///////Navbar
    it('Test #01 Boton "soliciar asesoria sin costo" en el navbar', () => {
        // hacer click en el boton "solicitar asesoria sin costo"
        cy.contains('Solicitar asesoría sin costo').click();
        // relleno de formulario introduciendo datos válidos
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

    it('Test #02 Boton Registrar mi Producto - Soy fabricante de software', () => {
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
        cy.get(':nth-child(5) > .border').type("123456");
        cy.get(':nth-child(6) > .border').type("123456");
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

    it('Test #03 Boton Registrar mi Producto - Soy Partner de Software', () =>{
        const correoElectronico = generarCorreoElectronico();
        cy.get('#btn-register-box > img').click();
        cy.get('#register-box > [href="/panel-usuario/partner-register"]').click();
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

    //Sección Categorias Navbar
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
    it('Categorias Hub - Gestión', () => {
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
    
    /// Seccion Buscador 
    it('Campo Buscar - Home', () =>{
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
    it('Seccion "Impulsamos la digitalizacion empresarial" | Home', () => {
        cy.get('.gap-12 > :nth-child(1) > :nth-child(2) > .flex > .btn').click();
        cy.contains('¿Qué tipo de software estás buscando?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/')
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
        cy.get('.w-full.toggle-hidden > :nth-child(2) > .flex > .btn').click();
        cy.contains('¿Qué tipo de software estás buscando?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/')
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
        cy.get('.modal-body > .flex > div > .btn').click();
    })

    // Sección "Un desarrollador, varias soluciones
    it('Sección "Un desarrollador, varias soluciones" | Cards Softwares', () => {
        ///
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
    it('Fabricante Soft', () =>{
        const correoElectronico = generarCorreoElectronico();
        cy.get('.justify-between > .btn > img').click();
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
        cy.wait(4000);
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    it('Partner', () =>{
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
        cy.wait(4000);
        cy.visit('https://www.dev.comparasoftware.com/');
    })

//Seccion Navega por las cateorias mas visitadas

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
        cy.get('a[href="/categorias"]').contains('Ver todas las categorías').click();
        cy.contains('¿Qué tipo de software estás buscando?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })

    // Footer 
    it('Nuestra Empresa | Footer', () => {
        cy.get('.tagm-gral-link-landg-sobre-empresa').click();
        cy.contains('¿Qué hacemos?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');

        cy.get(':nth-child(4) > .gral-link-eventos').click();
        cy.contains('Que tu reseña traspase la pantalla.').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        
        cy.get('.tagm-gral-link-servicios').click()
        cy.contains('Presencia en listados').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('.tagm-gral-link-sesion-prove').click();
        cy.contains('Iniciar Sesión').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('.justify-evenly > :nth-child(2) > :nth-child(4) > :nth-child(1) > .flex').click();
        cy.contains('Registra tu Software').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.get('.justify-evenly > :nth-child(2) > :nth-child(4) > :nth-child(2) > .flex').click();
        const stub = cy.stub()
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('ResizeObserver')) {
                stub() 
                return false
            }
        })
        cy.contains('Regístrate como partner').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    });
})
