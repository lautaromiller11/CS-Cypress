/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of null (reading 'nextElementSibling')")) {
        return false
    }
    return true
})

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("jQuery is not defined")) {
        return false
    }
    return true
})

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of undefined (reading 'fn')")) {
        return false
    }
    return true
})

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of undefined (reading 'querySelector')")) {
        return false
    }
    return true
})

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("NetworkError when attempting to fetch resource.")) {
        return false
    }
    return true
})




function generarCorreoElectronico() {
    const cadenaAleatoria = Math.random().toString(36).substring(7);
    const correoElectronico = `usuario_${cadenaAleatoria}@ejemplo.com`;
    return correoElectronico;
}


context('Categoria Plantilla Arya 2', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/software-crm')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("toggleUnselect is not defined")) {
                return false;
            }
            return true;
        })
    })

    //Navbar 

    it('Form asesoria - navbar', () => {
        // hacer click en el boton "solicitar asesoria sin costo"
        cy.contains('Solicitar asesoría sin costo').click();
        // relleno de formulario introduciendo datos válidos
        cy.get('#option-7c46edc9e9d44dda6c288141197e8325-1 > :nth-child(1) > .spacing-inputs > .relative > #firstname').type('Nombre Test');
        cy.get('#option-7c46edc9e9d44dda6c288141197e8325-1 > :nth-child(2) > .spacing-inputs > div.flex > :nth-child(2) > .w-full > .relative > #phone').type('341665553');
        cy.get('#option-7c46edc9e9d44dda6c288141197e8325-1 > :nth-child(3) > .spacing-inputs > .relative > #company').type('Empresa Test');
        cy.get('#option-7c46edc9e9d44dda6c288141197e8325-1 > :nth-child(4) > .spacing-inputs > .relative > #email').type('empresatest@gmail.com');
        cy.get('#selected-cat').click();
        cy.get('[data-value="Analítica"]').click();
        cy.get('#cat-Analítica > #cat-name').click();
        cy.get('[data-value="Inteligencia de Negocio"]').click();
        cy.get('.modal-content > .row > .w-full > #end-btn').click();
    })

    it('Boton Registrar mi Producto - Soy fabricante de software', () => {
        const correoElectronico = generarCorreoElectronico();
        cy.get('#btn-register-box').click();
        cy.get('#register-box > .w-full > [href="/panel-usuario/register"] > span').click();
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
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })


    it('Boton Registrar mi Producto - Soy Partner de Software', () =>{
        const correoElectronico = generarCorreoElectronico();
        cy.get('#btn-register-box').click();
        cy.get('#register-box > .w-full > [href="/panel-usuario/partner-register"] > span').click();
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
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Campo Buscar - Navbar', () => {
        cy.get('.justify-self-start > .search-bar').type('Raptor Web Experience');
        cy.get('li > .relative').should('contain', 'Raptor Web Experience');
        cy.visit('https://www.dev.comparasoftware.com/software-crm')
        cy.get('.justify-self-start > .search-bar').type('Ventas');
        cy.get('.justify-self-start > .search-bar > .bg-white > #results').should('contain', 'Ventas');
        cy.visit('https://www.dev.comparasoftware.com/software-crm')
        cy.get('.justify-self-start > .search-bar').type('Software CRM');
        cy.get('.justify-self-start > .search-bar > .bg-white > #results').should('contain', 'CRM');
    })

    //Sección Categorias Navbar
    it('Categorias - Hub Marketing', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('a[href="/automatizacion-de-marketing"]').click();
        cy.contains('Software de Automatización de Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.selected > :nth-child(2) > .w-full').click();
        cy.contains('Software de Email Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.selected > :nth-child(3) > .w-full').click();
        cy.contains('Software para Marketing en Redes Sociales en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        //cy.get('#btn-cat-menu > img').click();
        //cy.get('#cat-top10-list').should('have.length', 10);
    })

    it('Categorias - Hub Ventas', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="1"]').click();
        cy.get('a[href="/software-crm"]').click();
        cy.contains('Software CRM en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="1"]').click();
        cy.get('.sub-cat-1 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Ventas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Categorias - Hub Mantenimiento', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="2"]').click();
        cy.get('a[href="/software-de-mantenimiento"]').click();
        cy.contains('Software de Mantenimiento en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Mantenimiento de Equipos Médico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Mantenimiento Predictivo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Categorias - Hub ERP', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="3"]').click();
        cy.get('a[href="/software-erp"]').click();
        cy.contains('Software ERP en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Producción y Fabricación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Gestión de Calidad en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(4) > .w-full').click();
        cy.contains('Software para Inventarios en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Categorias - Hub Analitica', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="4"]').click();
        cy.get('a[href="/analisis-estadistico"]').click();
        cy.contains('Software Estadístico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Base de Datos en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Inteligencia de Negocio en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Categorías Hub - Recursos Humanos', () => {
        // cy.get('#btn-cat-menu > img').click();
        // cy.get('[data-pos="5"]').click();
        // cy.get('.sub-cat-5 > .active').click();
        // cy.contains('Software de Gestión de Desempeño Empresarial en México').should('exist');
        // cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="5"]').click();
        cy.get('.sub-cat-5 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Recursos Humanos en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="5"]').click();
        cy.get('.sub-cat-5 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Pago de Nómina en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Categorias Hub - Contabilidad y Finanzas', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="6"]').click();
        cy.get('a[href="/facturacion-en-linea"]').click();
        cy.contains('Software de facturación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Firma Electrónica en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Cobranza en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Categorias Hub - Educativo', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="7"]').click();
        cy.get('a[href="/e-learning"]').click();
        cy.contains('Plataformas E-learning en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(2) > .w-full').click();
        cy.contains('Software Educativo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(3) > .w-full').click();
        cy.contains('Software LMS en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Categorias Hub - Servicio al Cliente', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="8"]').click();
        cy.get('a[href="/atencion-al-cliente"]').click();
        cy.contains('Software de Atención al Cliente en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Chatbot en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Mesa de Ayuda en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');

    })
    it('Categorias Hub - Gestión', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="9"]').click();
        cy.get('a[href="/software-para-restaurantes"]').click();
        cy.contains('Software para Restaurante en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Construcción en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(3) > .w-full').click();
        cy.contains('Software Médico para Clínicas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('#btn-cat-menu').click();
        cy.get('.header-list > [data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(4) > .w-full').click();
        cy.contains('Software para Veterinarias en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Form "¿Necesitas Ayuda?"', () => {
        cy.get('#firstname').type('Nombre Prueba');
        cy.get('#email').type('prueba@gmail.com');
        cy.get('.select-form').click();
        cy.get('[data-value="+54"]').click();
        cy.get('#phone').type('341658845');
        cy.get('#end-btn').click();
        cy.wait(1000);
        cy.get('.modal-body > .flex > .font-medium').should('exist');
        cy.get('.modal-close').click();
    })

    it('Sección Categorias Relacionadas', () => {
        cy.get('.feature-box > :nth-child(1) > .justify-start > .text-neutral-500').click();
        cy.contains('Software de Gestión de Contratos').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');

        cy.get('.feature-box > :nth-child(2) > .justify-start > .text-neutral-500').click();
        cy.contains('Software CRM Inmobiliario').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');

        cy.get('.feature-box > :nth-child(3) > .justify-start > .text-neutral-500').click();
        cy.contains('Software de Ventas').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');

        cy.get('.feature-box > :nth-child(4) > .justify-start > .text-neutral-500').click();
        cy.contains('Online CRM Software').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');

        cy.get('.feature-box > :nth-child(5) > .justify-start > .text-neutral-500').click();
        cy.contains('CRM para Pymes').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');

        cy.get('.feature-box > :nth-child(6) > .justify-start > .text-neutral-500').click();
        cy.contains('Software de Pasarela de Pagos').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })

    it('Comparador Top 3', () => {
        cy.get(':nth-child(1) > .preset-comparation > .btn').click();
        cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');

        cy.get(':nth-child(2) > .preset-comparation > .btn').click();
        cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');

        cy.get(':nth-child(3) > .preset-comparation > .btn').click();
        cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })
    // //Comparador top 3
    // it('Comparador Top 3', () => {
    //     //CLick en primer soft
    //     cy.get('.h-fit > :nth-child(1) > .text-blue-950').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Click en segundo soft
    //     cy.get('.h-fit > :nth-child(2) > .text-blue-950').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //CLick en tercer Soft
    //     cy.get(':nth-child(3) > .text-blue-950').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Comparar los 3 softwares
    //     cy.get(':nth-child(5) > .preset-comparation').click()
    //     cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
    //     cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
    //     cy.get(':nth-child(3) > .flex-row > .flex-col').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    // })

    //Card de software en el listado
    it('Card de Software en el listado', () => {
        //cy.get(':nth-child(1) > .self-stretch.items-start > .items-start.gap-3 > :nth-child(1) > .w-20 > .flex > .max-w-full').invoke('removeAttr', 'target').click();
        //Boton cotizar
        cy.get('#soft-item-7357 > :nth-child(4) > .grid-cols-2 > .col-span-2 > .btn').click();
        cy.get('.spacing-inputs > .relative > #firstname').type('Nombre Prueba');
        cy.get('#country_code > .select-form').click();
        cy.get('#country_code > .find_country > .select-options-country > [data-value="+54"]').click();
        cy.get('.w-full > .relative > #phone').type('341656454');
        cy.get('#company').type('Empresa Prueba');
        cy.get('.spacing-inputs > .relative > #email').type('prueba@gmail.com');
        cy.get('.row > .w-full > #end-btn').click();
        cy.get('.btn-close > img').click();
        //cy.get('.modal-body > .flex > div > .btn').click();
        //Comparar en el listado
        cy.get('label[for="soft-compare-7357"]').click();
        cy.get('label[for="soft-compare-6109"]').click();
        cy.get('label[for="soft-compare-5693"]').click();
        cy.get('#btn-view-comparator > .text-xs').click();
        cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(3) > .flex-row > .flex-col').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    })


        //Dejar comentado hasta encontrar solucion
    
    // it('Top Software $Software - Carrousel',() =>{
    //     //Primer Soft
    //     cy.get('#carousel-prices-arya > :nth-child(1) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Segundo Soft
    //     cy.get('#carousel-prices-arya > :nth-child(2) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Tercer soft
    //     cy.get('#carousel-prices-arya > :nth-child(3) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Cuarto Soft
    //     cy.get('#carousel-prices-arya > :nth-child(4) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Mover carrousel 4 veces
    //     cy.get('button[onclick="moveManual(\'forward\',225,4)"]').click();
    //     cy.get('button[onclick="moveManual(\'forward\',225,4)"]').click();
    //     cy.get('button[onclick="moveManual(\'forward\',225,4)"]').click();
    //     cy.get('button[onclick="moveManual(\'forward\',225,4)"]').click();
    //     //Quinto Soft
    //     cy.get('#carousel-prices-arya > :nth-child(5) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Sexto Soft
    //     cy.get('#carousel-prices-arya > :nth-child(6) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Septimo Soft
    //     cy.get('#carousel-prices-arya > :nth-child(7) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Octavo Soft
    //     cy.get('#carousel-prices-arya > :nth-child(8) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Mover carrousel dos veces
    //     cy.get('button[onclick="moveManual(\'forward\',225,4)"]').click();
    //     cy.get('button[onclick="moveManual(\'forward\',225,4)"]').click();
    //     //Noveno Soft 
    //     cy.get('#carousel-prices-arya > :nth-child(9) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    //     //Decimo soft
    //     cy.get('#carousel-prices-arya > :nth-child(10) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-crm');
    // })

    //Seccion Software Seleccionado (Dejar comentado hasta encontrar solución)
    // it.only('Seccion Soft Seleccionado', () => {
    //     //Primer Soft
    //     //Click en el nombre
    //     cy.get('.gap-4 > :nth-child(1) > .h-11 > .btn').click();
    //     cy.get('#soft-title > .font-medium').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/veterinario');
    // })

    //Footer
    it('Footer', () => {
        cy.get('.tagm-gral-link-landg-sobre-empresa').invoke('removeAttr', 'target').click();
        cy.contains('¿Qué hacemos?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');

        cy.get(':nth-child(4) > .gral-link-eventos').click();
        cy.contains('Que tu reseña traspase la pantalla.').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        
        cy.get('.tagm-gral-link-servicios').click()
        cy.contains('Presencia en listados').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('.tagm-gral-link-sesion-prove').click();
        cy.contains('Iniciar Sesión').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('.justify-evenly > :nth-child(2) > :nth-child(4) > :nth-child(1) > .flex').click();
        cy.contains('Registra tu Software').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
        cy.get('.justify-evenly > :nth-child(2) > :nth-child(4) > :nth-child(2) > .flex').click();
        const stub = cy.stub()
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('ResizeObserver')) {
                stub() 
                return false
            }
        })
        cy.contains('Regístrate como partner').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-crm');
    });
})