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

context('Home', () => {
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

    //Registrar mi Producto - Soy Partner de Software
    it('Registrar mi Producto - Soy Partner de Software', () => {
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
        cy.get('a[href="/categorias"]').contains('Ver todas las categorías').click();
        cy.contains('¿Qué tipo de software estás buscando?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/');
    })


    //Casos Criticos Soft Arya

    // Casos Críticos Soft Arya
    context('Perfil de Software - Arya', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // Verificar si la excepción es la que quieres ignorar
            if (err.message.includes("toggleUnselect is not defined")) {
                // Devolver falso para indicar a Cypress que ignore esta excepción
                return false;
            }
            // Devolver verdadero para que Cypress maneje la excepción como de costumbre
            return true;
        })
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
        })

        it('Boton Registrar mi Producto - Soy fabricante de software', () => {
            cy.visit('https://www.dev.comparasoftware.com/bind');
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
            cy.visit('https://www.dev.comparasoftware.com/bind');
        })

        it('Boton Registrar mi Producto - Soy Partner de Software', () => {
            cy.visit('https://www.dev.comparasoftware.com/bind');
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
            cy.visit('https://www.dev.comparasoftware.com/bind');
        })
        /// Seccion Buscador 
        it('Campo Buscar', () => {
            cy.visit('https://www.dev.comparasoftware.com/bind');
            cy.get('#search-bar').type('Raptor Web Experience');
            cy.get('li > .relative').should('contain', 'Raptor Web Experience');
            cy.visit('https://www.dev.comparasoftware.com/bind')
            cy.get('#search-bar').type('Ventas');
            cy.get('#results').should('contain', 'Ventas');
            cy.visit('https://www.dev.comparasoftware.com/bind');
            cy.get('#search-bar').type('Software CRM');
            cy.get('#results').should('contain', 'CRM');
        })

        it('Boton Ver Precio | Boton Prueba Gratis', () => {
            //Ver precio
            cy.visit('https://www.dev.comparasoftware.com/bind');
            cy.get('.text-end > .btn').click();
            cy.get('#firstname').type('Nombre Prueba');
            cy.get('.select-form').click();
            cy.get('[data-value="+504"] > :nth-child(1)').click();
            cy.get('#phone').type('24244554');
            cy.get('#company').type('Empresa prueba');
            cy.get('#email').type('correoprueba@gmail.com');
            cy.get('#end-btn').click();
            cy.wait(1000);
            cy.get('.modal-body > .flex > div > .btn').click();
            // Prueba gratis
            cy.get('.gap-3 > .h-11 > .btn').click();
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(1) > .spacing-inputs > .relative > #firstname').type('Nombre prueba');
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(2) > .spacing-inputs > div.flex > #country_code > .select-form').click();
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(2) > .spacing-inputs > div.flex > #country_code > .find_country > .select-options-country > [data-value="+56"]').click();
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(2) > .spacing-inputs > div.flex > :nth-child(2) > .w-full > .relative > #phone').type('6512145');
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(3) > .spacing-inputs > .relative > #company').type('Empresa Prueba');
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(4) > .spacing-inputs > .relative > #email').type('prueba@gmail.com');
            cy.get('#modal-form-5bc25fa678cc04b1a11a0b336571abdf > .modal-dialog > #form-modal-1Step > .modal-content > .row > .w-full > #end-btn').click();
            cy.wait(1000);
            cy.get('#modal-form-5bc25fa678cc04b1a11a0b336571abdf > .modal-dialog > #form-modal-1Step > .modal-content > .modal-body > .flex > div > .btn').click();
        })


        //Comparador Software vs Software
        it('Comparador Software vs Software', () => {
            cy.visit('https://www.dev.comparasoftware.com/bind');
            cy.get('[data-softids="2329,5898"] > .btn').click();
            cy.get('.border-global-gris-2.home-container > .my-6').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/bind');
            cy.get('[data-softids="2329,5721"] > .btn').click();
            cy.get('.border-global-gris-2.home-container > .my-6').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/bind');
            cy.get('[data-softids="2329,3989"] > .btn').click();
            cy.get('.border-global-gris-2.home-container > .my-6').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/bind');
        })

        //Banner agendar llamada
        it('Banner Agendar Llamada', () => {
            cy.visit('https://www.dev.comparasoftware.com/bind');
            cy.get('.py-4 > .flex').click()
            cy.get('#firstname').type('Nombre Prueba');
            cy.get('.select-form').click();
            cy.get('[data-value="+56"]').click();
            cy.get('#phone').type('356512');
            cy.get('#company').type('Empresa prueba');
            cy.get('#email').type('emailprueba@gmail.com');
            cy.get('#end-btn').click();
            cy.get('.modal-body > .flex > div > .btn').click();
        })

        //Sección precios
        it('Sección precios', () => {
            //Primer Form
            cy.visit('https://www.dev.comparasoftware.com/bind');
            cy.get('#0').click();
            cy.get('#firstname').type('Nombre Prueba');
            cy.get('.select-form').click();
            cy.get('[data-value="+56"]').click();
            cy.get('#phone').type('5434324');
            cy.get('#company').type('Empresa prueba');
            cy.get('#email').type('prueba@gmail.com');
            cy.get('#end-btn').click();
            cy.get('.modal-body > .flex > div > .btn').click();
            //Segundo Form
            cy.get('#1').click();
            cy.get('#firstname').type('Nombre Prueba');
            cy.get('.select-form').click();
            cy.get('[data-value="+56"]').click();
            cy.get('#phone').type('5434324');
            cy.get('#company').type('Empresa prueba');
            cy.get('#email').type('prueba@gmail.com');
            cy.get('#end-btn').click();
            cy.get('.modal-body > .flex > div > .btn').click();
            //Tercer Form
            cy.get('#2').click();
            cy.get('#firstname').type('Nombre Prueba');
            cy.get('.select-form').click();
            cy.get('[data-value="+56"]').click();
            cy.get('#phone').type('5434324');
            cy.get('#company').type('Empresa prueba');
            cy.get('#email').type('prueba@gmail.com');
            cy.get('#end-btn').click();
            cy.get('.modal-body > .flex > div > .btn').click();
        })
    })

    /// Casos criticos Categoria Arya
    context('Categoria Arya', () => {
        it('form asesoria navbar', () => {
            cy.visit('https://www.dev.comparasoftware.com/software-erp');
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
            cy.visit('https://www.dev.comparasoftware.com/software-erp');
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
            cy.visit('https://www.dev.comparasoftware.com/software-erp');
        })


        it('Boton Registrar mi Producto - Soy Partner de Software', () => {
            cy.visit('https://www.dev.comparasoftware.com/software-erp');
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
            cy.visit('https://www.dev.comparasoftware.com/software-erp');
        })

        it('Campo Buscar', () => {
            cy.visit('https://www.dev.comparasoftware.com/software-erp');
            cy.get('#search-bar').type('Raptor Web Experience');
            cy.get('li > .relative').should('contain', 'Raptor Web Experience');
            cy.visit('https://www.dev.comparasoftware.com/software-erp')
            cy.get('#search-bar').type('Ventas');
            cy.get('#results').should('contain', 'Ventas');
            cy.visit('https://www.dev.comparasoftware.com/software-erp')
            cy.get('#search-bar').type('Software CRM');
            cy.get('#results').should('contain', 'CRM');
        })


        it('Card de Soft en el listado', () => {
            cy.visit('https://www.dev.comparasoftware.com/software-erp')
            cy.contains('h3', 'Funcionalidades de Bind').click();
            cy.contains('.btn-primary', 'Ver precio').click();
            cy.get('#option-d052b84c0c21ee58395820057c8e8393-1 > :nth-child(1) > .spacing-inputs > .relative > #firstname').type('Nombre Prueba');
            cy.get('#option-d052b84c0c21ee58395820057c8e8393-1 > :nth-child(2) > .spacing-inputs > div.flex > :nth-child(2) > .w-full > .relative > #phone').type('341656552');
            cy.get('#option-d052b84c0c21ee58395820057c8e8393-1 > :nth-child(3) > .spacing-inputs > .relative > #company').type('Empresa prueba');
            cy.get('#option-d052b84c0c21ee58395820057c8e8393-1 > :nth-child(4) > .spacing-inputs > .relative > #email').type('prueba@gmail.com');
            cy.get('.modal-content > .row > .w-full > #end-btn').click();
            cy.get('.modal-body > .flex > div > .btn').click();
            cy.contains('.btn-soft-ux-a', 'Prueba gratis').click();
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(1) > .spacing-inputs > .relative > #firstname').type('Nombre prueba');
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(2) > .spacing-inputs > div.flex > :nth-child(2) > .w-full > .relative > #phone').type('34165656');
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(3) > .spacing-inputs > .relative > #company').type('Empresa prueba');
            cy.get('#option-5bc25fa678cc04b1a11a0b336571abdf-1 > :nth-child(4) > .spacing-inputs > .relative > #email').type('test@gmail.com');
            cy.get('#modal-form-5bc25fa678cc04b1a11a0b336571abdf > .modal-dialog > #form-modal-1Step > .modal-content > .row > .w-full > #end-btn').click();
            cy.get('#modal-form-5bc25fa678cc04b1a11a0b336571abdf > .modal-dialog > #form-modal-1Step > .modal-content > .modal-body > .flex > div > .btn').click();
        })

        it('Tabla comparativa', () => {
            cy.visit('https://www.dev.comparasoftware.com/software-erp');
            cy.contains('.select-selected', 'Busca un software...').click();
            cy.get('#custom-select-event-3 > .select-items > [data-slug="goujana-software-erp"] > .mb-0').click();
            cy.get('#btn-side-comparator').click();
            cy.contains('Comparativa Bind vs. Raptor Web Experience vs. FinanSaaS vs. Goujana').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/software-erp');
        })

    })

    // Casos criticos Categoria PPC
    context('Categoria PPC', () => {
        it('form asesoria navbar', () => {
            cy.visit('https://www.dev.comparasoftware.com/veterinario')
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
            cy.get('.modal-body > .flex > div > .btn').click();
        })

        it('Boton Registrar mi Producto - Soy fabricante de software', () => {
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
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
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
        })

        it('Boton Registrar mi Producto - Soy Partner de Software', () => {
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
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
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
        })

        it('Campo Buscar', () => {
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
            cy.get('#search-bar').type('Raptor Web Experience');
            cy.get('li > .relative').should('contain', 'Raptor Web Experience');
            cy.visit('https://www.dev.comparasoftware.com/veterinario')
            cy.get('#search-bar').type('Ventas');
            cy.get('#results').should('contain', 'Ventas');
            cy.visit('https://www.dev.comparasoftware.com/veterinario')
            cy.get('#search-bar').type('Software CRM');
            cy.get('#results').should('contain', 'CRM');
        })

        it('Seccion Top 4 Software', () => {
            // Primer Soft
            //Click a Nombre de Soft
            cy.visit('https://www.dev.comparasoftware.com/veterinario')
            cy.contains('Vet Cloud').invoke('removeAttr', 'target').click();
            cy.get('#soft-title > .font-medium').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
            //Click a boton "ver mas"
            cy.get('.container > :nth-child(2) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
            cy.get('#soft-title > .font-medium').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');

            //Segundo Soft
            //Click a nombre de Sof
            cy.contains('SaelVET').invoke('removeAttr', 'target').click();
            cy.get('#soft-title > .font-medium').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
            //Click a boton "ver mas"
            cy.get('.container > :nth-child(3) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
            cy.get('#soft-title > .font-medium').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');

            //Tercer Soft
            //Click a nombre de Sof
            cy.contains('VetBilling').invoke('removeAttr', 'target').click();
            cy.get('#soft-title > .font-medium').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
            //Click a boton "ver mas"
            cy.get('.container > :nth-child(4) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
            cy.get('#soft-title > .font-medium').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');

            //Cuarto Soft
            //Click a nombre de Sof
            cy.contains('HVMS').invoke('removeAttr', 'target').click();
            cy.get('#soft-title > .font-medium').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
            //Click a boton "ver mas"
            cy.get('.container > :nth-child(5) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
            cy.get('#soft-title > .font-medium').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');

            //Click a logo del Soft (((Dejar comentado hasta solucionar abrir en la misma pestaña)))
            //cy.get('.container > :nth-child(2) > .items-center > .w-20.relative > .w-20 > .track-click > .rounded').invoke('removeAttr', 'target').click();
        })

        it('Form "¿Necesitas Ayuda?"', () => {
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
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

        it('Comparador Software vs Software', () => {
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
            cy.get(':nth-child(1) > .preset-comparation > .btn').click();
            cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
            cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');

            cy.get(':nth-child(2) > .preset-comparation > .btn').click();
            cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
            cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');

            cy.get(':nth-child(3) > .preset-comparation > .btn').click();
            cy.get(':nth-child(1) > .flex-row > .flex-col').should('exist');
            cy.get(':nth-child(2) > .flex-row > .flex-col').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
        })

        it('Card de Software en el listado', () => {
            cy.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes("toggleUnselect is not defined")) {
                    return false;
                }
                return true;
            })
            cy.visit('https://www.dev.comparasoftware.com/veterinario');
            cy.get(':nth-child(1) > .self-stretch.items-start > .items-start.gap-3 > :nth-child(1) > .w-20 > .flex > .max-w-full').invoke('removeAttr', 'target').click();
            //Boton cotizar
            cy.get(':nth-child(1) > .pt-6 > .justify-end > .hidden').click();
            cy.get('.spacing-inputs > .relative > #firstname').type('Nombre Prueba');
            cy.get('#country_code > .select-form').click();
            cy.get('#country_code > .find_country > .select-options-country > [data-value="+54"]').click();
            cy.get('.w-full > .relative > #phone').type('341656454');
            cy.get('#company').type('Empresa Prueba');
            cy.get('.spacing-inputs > .relative > #email').type('prueba@gmail.com');
            cy.get('.row > .w-full > #end-btn').click();
            cy.get('.modal-body > .flex > div > .btn').click();

            //Comparar en el listado (((Averiguar resolución)))
            //cy.get(':nth-child(1) > .pt-6 > .justify-between').should('contain', 'Comparar').click();
        })


    })

})