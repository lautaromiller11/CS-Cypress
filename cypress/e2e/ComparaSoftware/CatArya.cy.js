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

context('Categoria Plantilla Arya', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/software-erp')
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

    it('Form solicitar asesoria - navbar', () => {
        // hacer click en el boton "solicitar asesoria sin costo"
        cy.get('a.btn.btn-primary.btn-form').contains('Solicitar asesoría sin costo').click();
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
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
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
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('Campo Buscar - Navbar', () => {
        cy.get('.justify-self-start > .search-bar').type('Raptor Web Experience');
        cy.get('li > .relative').should('contain', 'Raptor Web Experience');
        cy.visit('https://www.dev.comparasoftware.com/software-erp')
        cy.get('.justify-self-start > .search-bar').type('Ventas');
        cy.get('.justify-self-start > .search-bar > .bg-white > #results').should('contain', 'Ventas');
        cy.visit('https://www.dev.comparasoftware.com/software-erp')
        cy.get('.justify-self-start > .search-bar').type('Software CRM');
        cy.get('.justify-self-start > .search-bar > .bg-white > #results').should('contain', 'CRM');
    })

    //Sección Categorias Navbar
    it('Categorias - Hub Marketing', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('a[href="/automatizacion-de-marketing"]').click();
        cy.contains('Software de Automatización de Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('.selected > :nth-child(2) > .w-full').click();
        cy.contains('Software de Email Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('.selected > :nth-child(3) > .w-full').click();
        cy.contains('Software para Marketing en Redes Sociales en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        //cy.get('#btn-cat-menu > img').click();
        //cy.get('#cat-top10-list').should('have.length', 10);
    })

    it('Categorias - Hub Ventas', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="1"]').click();
        cy.get('a[href="/software-crm"]').click();
        cy.contains('Software CRM en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="1"]').click();
        cy.get('.sub-cat-1 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Ventas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('Categorias - Hub Mantenimiento', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="2"]').click();
        cy.get('a[href="/software-de-mantenimiento"]').click();
        cy.contains('Software de Mantenimiento en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Mantenimiento de Equipos Médico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Mantenimiento Predictivo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('Categorias - Hub ERP', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="3"]').click();
        cy.get('a[href="/software-erp"]').click();
        cy.contains('Software ERP en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Producción y Fabricación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Gestión de Calidad en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(4) > .w-full').click();
        cy.contains('Software para Inventarios en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('Categorias - Hub Analitica', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="4"]').click();
        cy.get('a[href="/analisis-estadistico"]').click();
        cy.contains('Software Estadístico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Base de Datos en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Inteligencia de Negocio en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('Categorías Hub - Recursos Humanos', () => {
        // cy.get('#btn-cat-menu > img').click();
        // cy.get('[data-pos="5"]').click();
        // cy.get('.sub-cat-5 > .active').click();
        // cy.contains('Software de Gestión de Desempeño Empresarial en México').should('exist');
        // cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="5"]').click();
        cy.get('.sub-cat-5 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Recursos Humanos en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="5"]').click();
        cy.get('.sub-cat-5 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Pago de Nómina en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('Categorias Hub - Contabilidad y Finanzas', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="6"]').click();
        cy.get('a[href="/facturacion-en-linea"]').click();
        cy.contains('Software de facturación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Firma Electrónica en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Cobranza en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('Categorias Hub - Educativo', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="7"]').click();
        cy.get('a[href="/e-learning"]').click();
        cy.contains('Plataformas E-learning en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(2) > .w-full').click();
        cy.contains('Software Educativo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(3) > .w-full').click();
        cy.contains('Software LMS en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('Categorias Hub - Servicio al Cliente', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="8"]').click();
        cy.get('a[href="/atencion-al-cliente"]').click();
        cy.contains('Software de Atención al Cliente en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Chatbot en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(3) > .w-full').click();
        cy.contains('Software de Mesa de Ayuda en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');

    })
    it('Categorias Hub - Gestión', () => {
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="9"]').click();
        cy.get('a[href="/software-para-restaurantes"]').click();
        cy.contains('Software para Restaurante en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(2) > .w-full').click();
        cy.contains('Software de Construcción en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(3) > .w-full').click();
        cy.contains('Software Médico para Clínicas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('#btn-cat-menu').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(4) > .w-full').click();
        cy.contains('Software para Veterinarias en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    //Calculadora
    // it.only('Calculadora' ,() =>{
    //     cy.contains('label', 'Entre 20 a 100').click();
    //     cy.get('#next-btn').click();
    //     cy.get('#selector').invoke('attr', 'style', 'left: 50%').trigger('input');
    // })

    it('Card de Soft en el listado', () =>{
        cy.contains('h4', 'Funcionalidades de Bind').click();
        cy.contains('.btn-primary', 'Cotizar').click();
        cy.get('#option-d052b84c0c21ee58395820057c8e8393-1 > :nth-child(1) > .spacing-inputs > .relative > #firstname').type('Nombre Prueba');
        cy.get('#option-d052b84c0c21ee58395820057c8e8393-1 > :nth-child(2) > .spacing-inputs > div.flex > :nth-child(2) > .w-full > .relative > #phone').type('341656552');
        cy.get('#option-d052b84c0c21ee58395820057c8e8393-1 > :nth-child(3) > .spacing-inputs > .relative > #company').type('Empresa prueba');
        cy.get('#option-d052b84c0c21ee58395820057c8e8393-1 > :nth-child(4) > .spacing-inputs > .relative > #email').type('prueba@gmail.com');
        cy.get('.modal-content > .row > .w-full > #end-btn').click();
        cy.get('.modal-body > .flex > div > .btn').click();
        cy.get('.btn-form').contains('Prueba gratis').click();
        cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(1) > .spacing-inputs > .relative > #firstname').type('Nombre prueba');
        cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(2) > .spacing-inputs > div.flex > :nth-child(2) > .w-full > .relative > #phone').type('34165656');
        cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(3) > .spacing-inputs > .relative > #company').type('Empresa prueba');
        cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(4) > .spacing-inputs > .relative > #email').type('test@gmail.com');
        cy.get('#modal-form-5bc25fa678cc04b1a11a0b336571abdf > .modal-dialog > #form-modal-1Step > .modal-content > .row > .w-full > #end-btn').click();
        cy.get('#modal-form-5bc25fa678cc04b1a11a0b336571abdf > .modal-dialog > #form-modal-1Step > .modal-content > .modal-body > .flex > div > .btn').click();
        //Comparar en el listado
        cy.get('label[for="soft-compare-2329"]').click();
        cy.get('label[for="soft-compare-5898"]').click();
        cy.get('label[for="soft-compare-7609"]').click();
        cy.get('#btn-view-comparator > .text-xs').click();
        cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(3) > .flex-row > .flex-col').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    //Se eliminó esta sección, dejar comentado
    // it('Tabla comparativa', () =>{
    //     cy.contains('.select-selected', 'Busca un software...').click();
    //     cy.get('#custom-select-event-3 > .select-items > [data-slug="goujana-software-erp"] > .mb-0').click();
    //     cy.wait(1000);
    //     cy.get('#btn-side-comparator').click();
    //     cy.wait(1000);
    //     cy.contains('Comparativa Bind vs. Raptor Web Experience vs. FinanSaaS vs. Goujana').should('exist');
    //     cy.visit('https://www.dev.comparasoftware.com/software-erp');
    // })

    it('Sección ¿Utilizas actualmente un Software?', () =>{
        cy.get('a.btn-form[data-form="form_cat_header_si"]').eq(0).click();
        cy.get(':nth-child(3) > .fw-500 > .mb-0').click();
        cy.get(':nth-child(4) > .fw-500 > .mb-0').click();
        cy.get(':nth-child(5) > .fw-500 > .mb-0').click();
        cy.get('.modal-body > .text-blue > :nth-child(2) > #next-btn').click();
        cy.get('#option-7e169ddf5ea640713c117c81e784b4d0-2 > .flex > :nth-child(2) > i').click();
        cy.get('.modal-body > .text-blue > :nth-child(2) > #next-btn').click();
        cy.get('#option-7e169ddf5ea640713c117c81e784b4d0-3 > .flex > :nth-child(4) > i').click();
        cy.get('.modal-body > .text-blue > :nth-child(2) > #next-btn').click();
        cy.get('#option-7e169ddf5ea640713c117c81e784b4d0-4 > :nth-child(1) > .spacing-inputs > .relative > #firstname').type('Nombre Prueba');
        cy.get('#option-7e169ddf5ea640713c117c81e784b4d0-4 > :nth-child(2) > .spacing-inputs > div.flex > :nth-child(2) > .w-full > .relative > #phone').type('3416568565');
        cy.get('#option-7e169ddf5ea640713c117c81e784b4d0-4 > :nth-child(3) > .spacing-inputs > .relative > #company').type('Empresa Test');
        cy.get('#option-7e169ddf5ea640713c117c81e784b4d0-4 > :nth-child(4) > .spacing-inputs > .relative > #email').type('prueba@gmail.com');
        cy.get('.modal-body > .text-blue > :nth-child(2) > #end-btn').click();
    })


    it('Comparador Software vs Software', () => {
        cy.get('button.preset-comparation').eq(0).click();
        cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.wait(1000);
        cy.get('button.preset-comparation').eq(1).click();
        cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.wait(1000);
        cy.get('button.preset-comparation').eq(2).click();
        cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
        cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.wait(1000);
    })


    it('Categorias Relacionadas' ,() =>{
        cy.get(':nth-child(4) > .flex-col > :nth-child(1) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Gestión de Almacenes').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');

        cy.get(':nth-child(4) > .flex-col > :nth-child(2) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Gestión de Pedidos').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');

        cy.get(':nth-child(4) > .flex-col > :nth-child(3) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Recursos Humanos').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');

        cy.get(':nth-child(4) > .flex-col > :nth-child(4) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software para Inventarios').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');

        cy.get(':nth-child(4) > .flex-col > :nth-child(5) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Logística').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');

        cy.get(':nth-child(4) > .flex-col > :nth-child(6) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Distribución').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');

        cy.get(':nth-child(4) > .flex-col > :nth-child(7) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de gestión de la cadena de suministro').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('Seccion Soft Seleccionado', () => {
        //Primer Soft
        cy.get('a[href="https://www.dev.comparasoftware.com/bind"]').contains('Bind').click();
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        //Segundo Soft
        cy.get('a[href="https://www.dev.comparasoftware.com/finansaas"]').contains('FinanSaaS').click();
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        //Tercer soft
        cy.get('a[href="https://www.dev.comparasoftware.com/raptor-web-experience"]').contains('Raptor Web Experience').click();
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        //Cuarto Soft
        cy.get('a[href="https://www.dev.comparasoftware.com/sistrade-erp-cmms"]').contains('SisTrade ERP CMMS').click();
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    })

    it('"Sección "No encuentra lo que buscas?"', () =>{
        cy.get('.container > .btn').click();
        cy.get('.page-header-title').should('exist');
    })


    it('Footer', () => {
        cy.get('.tagm-gral-link-landg-sobre-empresa').invoke('removeAttr', 'target').click();
        cy.contains('¿Qué hacemos?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');

        cy.get(':nth-child(4) > .gral-link-eventos').click();
        cy.contains('Que tu reseña traspase la pantalla.').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        
        cy.get('.tagm-gral-link-servicios').click()
        cy.contains('Presencia en listados').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('.tagm-gral-link-sesion-prove').click();
        cy.contains('Iniciar Sesión').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('.justify-evenly > :nth-child(2) > :nth-child(4) > :nth-child(1) > .flex').click();
        cy.contains('Registra tu Software').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
        cy.get('.justify-evenly > :nth-child(2) > :nth-child(4) > :nth-child(2) > .flex').click();
        const stub = cy.stub()
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('ResizeObserver')) {
                stub() 
                return false
            }
        })
        cy.contains('Regístrate como partner').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/software-erp');
    });

})
