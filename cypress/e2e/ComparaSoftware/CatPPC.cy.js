/// <reference types="cypress" />

function generarCorreoElectronico() {
    const cadenaAleatoria = Math.random().toString(36).substring(7);
    const correoElectronico = `usuario_${cadenaAleatoria}@ejemplo.com`;
    return correoElectronico;
}


context('Categoria Plantilla PPC', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/veterinario')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
        cy.on('uncaught:exception', (err, runnable) => {
            // Verificar si la excepción es la que quieres ignorar
            if (err.message.includes("toggleUnselect is not defined")) {
                // Devolver falso para indicar a Cypress que ignore esta excepción
                return false;
            }
            // Devolver verdadero para que Cypress maneje la excepción como de costumbre
            return true;
        })
    })
    it('form asesoria navbar', () => {
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
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Campo Buscar - Home', () => {
        cy.get('#search-bar').type('Raptor Web Experience');
        cy.get('li > .relative').should('contain', 'Raptor Web Experience');
        cy.visit('https://www.dev.comparasoftware.com/veterinario')
        cy.get('#search-bar').type('Ventas');
        cy.get('#results').should('contain', 'Ventas');
        cy.visit('https://www.dev.comparasoftware.com/veterinario')
        cy.get('#search-bar').type('Software CRM');
        cy.get('#results').should('contain', 'CRM');
    })

    it('Categorias - Hub Marketing', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('.selected > .active').click();
        cy.contains('Software de Automatización de Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('.selected > :nth-child(2)').click();
        cy.contains('Software de Email Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('.selected > :nth-child(3)').click();
        cy.contains('Software para Marketing en Redes Sociales en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        //cy.get('#cat-top10-list').should('have.length', 10);
    })

    it('Categorias - Hub Ventas', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="1"]').click();
        cy.get('.sub-cat-1 > .active > .w-full').click();
        cy.contains('Software CRM en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="1"]').click();
        cy.get('.sub-cat-1 > :nth-child(2)').click();
        cy.contains('Software de Ventas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Categorias - Hub Mantenimiento', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > .active').click();
        cy.contains('Software de Mantenimiento en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(2)').click();
        cy.contains('Software de Mantenimiento de Equipos Médico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(3)').click();
        cy.contains('Software de Mantenimiento Predictivo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Categorias - Hub ERP', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > .active').click();
        cy.contains('Software ERP en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(2)').click();
        cy.contains('Software de Producción y Fabricación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(3)').click();
        cy.contains('Software de Gestión de Calidad en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(4)').click();
        cy.contains('Software para Inventarios en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Categorias - Hub Analitica', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > .active').click();
        cy.contains('Software Estadístico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(2)').click();
        cy.contains('Software de Base de Datos en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(3)').click();
        cy.contains('Software de Inteligencia de Negocio en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Categorías Hub - Recursos Humanos', () => {
        // cy.get('#btn-cat-menu > img').click();
        // cy.get('[data-pos="5"]').click();
        // cy.get('.sub-cat-5 > .active').click();
        // cy.contains('Software de Gestión de Desempeño Empresarial en México').should('exist');
        // cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="5"]').click();
        cy.get('.sub-cat-5 > :nth-child(2)').click();
        cy.contains('Software de Recursos Humanos en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="5"]').click();
        cy.get('.sub-cat-5 > :nth-child(3)').click();
        cy.contains('Software de Pago de Nómina en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Categorias Hub - Contabilidad y Finanzas', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > .active').click();
        cy.contains('Software de facturación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(2)').click();
        cy.contains('Software de Firma Electrónica en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(3)').click();
        cy.contains('Software de Cobranza en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Categorias Hub - Educativo', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > .active').click();
        cy.contains('Plataformas E-learning en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(2)').click();
        cy.contains('Software Educativo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(3)').click();
        cy.contains('Software LMS en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Categorias Hub - Servicio al Cliente', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > .active').click();
        cy.contains('Software de Atención al Cliente en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(2)').click();
        cy.contains('Software de Chatbot en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(3)').click();
        cy.contains('Software de Mesa de Ayuda en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

    })
    it('Categorias Hub - Gestión', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > .active').click();
        cy.contains('Software para Restaurante en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(2)').click();
        cy.contains('Software de Construcción en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(3)').click();
        cy.contains('Software Médico para Clínicas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(4)').click();
        cy.contains('Software para Veterinarias en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Seccion Top 4 Software', () => {
        // Primer Soft
        //Click a Nombre de Soft
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
        cy.contains('Software de Abogados').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(2) > .justify-start > .text-neutral-500').click();
        cy.contains('Software de Gestión Agropecuaria').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(3) > .justify-start > .text-neutral-500').click();
        cy.contains('Software de Administración de Condominios').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(4) > .justify-start > .text-neutral-500').click();
        cy.contains('Software para Restaurante').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(5) > .justify-start > .text-neutral-500').click();
        cy.contains('Software de Alquiler de Propiedades').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(6) > .justify-start > .text-neutral-500').click();
        cy.contains('Software para Concesionarios').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(7) > .justify-start > .text-neutral-500').click();
        cy.contains('Software de Construcción').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(8) > .justify-start > .text-neutral-500').click();
        cy.contains('Software de Gestión').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(9) > .justify-start > .text-neutral-500').click();
        cy.contains('Software para Gimnasios').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(10) > .justify-start > .text-neutral-500').click();
        cy.contains('Software Inmobiliarios').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(11) > .justify-start > .text-neutral-500').click();
        cy.contains('Software Médico para Clínicas').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(12) > .justify-start > .text-neutral-500').click();
        cy.contains('Software de Odontología').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get('.feature-box > :nth-child(13) > .justify-start > .text-neutral-500').click();
        cy.contains('Programa para crear rutinas de entrenamiento').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Comparador Software vs Software', () => {
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

    // Banner Chat Whatsapp
    // it.only('Banner chat WPP' , ()=>{
    //     cy.get('.gap-6 > .p-2\.5').click();
    // })


    //Seccion "software seleccionado"
    it.only('Seccion Soft Seleccionado', () => {
        //Primer Soft
        //Click en el nombre
        cy.get(':nth-child(1) > .items-center > .flex-col > .justify-start > .w-full').click();
        cy.get('#soft-title > .font-medium').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        //Click en la imagen
        cy.get(':nth-child(1) > .items-center > .relative > .w-20 > .track-click > .rounded').click();
        cy.get('#soft-title > .font-medium').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        //Click en boton "ver mas"
        cy.get(':nth-child(1) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
        cy.get('#soft-title > .font-medium').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        //Segundo soft
        //Click en el nombre
        cy.get(':nth-child(2) > .items-center > .flex-col > .justify-start > .w-full').click();
        cy.get('#soft-title > .font-medium').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        //Click en la imagen
        // cy.get(':nth-child(2) > .items-center > .relative > .w-20 > .track-click > .rounded').click();
        // cy.get('.col-8 > .text-global-azul-dark').should('exist');
        // cy.visit('https://www.dev.comparasoftware.com/veterinario');
        //Tercer Soft
        //Click en el nombre
        cy.get(':nth-child(3) > .items-center > .flex-col > .justify-start > .w-full').click();
        cy.get('#soft-title > .font-medium').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        //Click en la imagen
        cy.get('.mb-20 > .grid > :nth-child(3) > .items-center > .relative > .w-20 > .track-click > .rounded').click();
        cy.get('#soft-title > .font-medium').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        //Click en boton "ver mas"
        cy.get('.mb-20 > .grid > :nth-child(3) > .self-stretch > .btn').invoke('removeAttr', 'target').click();
        cy.get('#soft-title > .font-medium').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    })

    it('Footer', () => {
        cy.get('.tagm-gral-link-landg-sobre-empresa').click();
        cy.contains('¿Qué hacemos?').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');

        cy.get(':nth-child(4) > .gral-link-eventos').click();
        cy.contains('Que tu reseña traspase la pantalla.').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        
        cy.get('.tagm-gral-link-servicios').click()
        cy.contains('Presencia en listados').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('.tagm-gral-link-sesion-prove').click();
        cy.contains('Iniciar Sesión').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('.justify-evenly > :nth-child(2) > :nth-child(4) > :nth-child(1) > .flex').click();
        cy.contains('Registra tu Software').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
        cy.get('.justify-evenly > :nth-child(2) > :nth-child(4) > :nth-child(2) > .flex').click();
        const stub = cy.stub()
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('ResizeObserver')) {
                stub() 
                return false
            }
        })
        cy.contains('Regístrate como partner').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/veterinario');
    });
})

