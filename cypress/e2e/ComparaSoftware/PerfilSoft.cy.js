/// <reference types="cypress" />

function generarCorreoElectronico() {
    const cadenaAleatoria = Math.random().toString(36).substring(7);
    const correoElectronico = `usuario_${cadenaAleatoria}@ejemplo.com`;
    return correoElectronico;
}
context('Perfil de Sotfware', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/bind')
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
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    it('Test #03 Boton Registrar mi Producto - Soy Partner de Software', () => {
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
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    //Sección Categorias Navbar
    it('Categorias - Hub Marketing', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('.selected > .active').click();
        cy.contains('Software de Automatización de Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('.selected > :nth-child(2)').click();
        cy.contains('Software de Email Marketing en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('.selected > :nth-child(3)').click();
        cy.contains('Software para Marketing en Redes Sociales en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        //cy.get('#cat-top10-list').should('have.length', 10);
    })

    it('Categorias - Hub Ventas', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="1"]').click();
        cy.get('.sub-cat-1 > .active > .w-full').click();
        cy.contains('Software CRM en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="1"]').click();
        cy.get('.sub-cat-1 > :nth-child(2)').click();
        cy.contains('Software de Ventas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    it('Categorias - Hub Mantenimiento', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > .active').click();
        cy.contains('Software de Mantenimiento en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(2)').click();
        cy.contains('Software de Mantenimiento de Equipos Médico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="2"]').click();
        cy.get('.sub-cat-2 > :nth-child(3)').click();
        cy.contains('Software de Mantenimiento Predictivo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    it('Categorias - Hub ERP', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > .active').click();
        cy.contains('Software ERP en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(2)').click();
        cy.contains('Software de Producción y Fabricación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(3)').click();
        cy.contains('Software de Gestión de Calidad en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="3"]').click();
        cy.get('.sub-cat-3 > :nth-child(4)').click();
        cy.contains('Software para Inventarios en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    it('Categorias - Hub Analitica', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > .active').click();
        cy.contains('Software Estadístico en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(2)').click();
        cy.contains('Software de Base de Datos en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="4"]').click();
        cy.get('.sub-cat-4 > :nth-child(3)').click();
        cy.contains('Software de Inteligencia de Negocio en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
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
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="5"]').click();
        cy.get('.sub-cat-5 > :nth-child(3)').click();
        cy.contains('Software de Pago de Nómina en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    it('Categorias Hub - Contabilidad y Finanzas', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > .active').click();
        cy.contains('Software de facturación en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(2)').click();
        cy.contains('Software de Firma Electrónica en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="6"]').click();
        cy.get('.sub-cat-6 > :nth-child(3)').click();
        cy.contains('Software de Cobranza en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    it('Categorias Hub - Educativo', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > .active').click();
        cy.contains('Plataformas E-learning en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(2)').click();
        cy.contains('Software Educativo en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="7"]').click();
        cy.get('.sub-cat-7 > :nth-child(3)').click();
        cy.contains('Software LMS en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    it('Categorias Hub - Servicio al Cliente', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > .active').click();
        cy.contains('Software de Atención al Cliente en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(2)').click();
        cy.contains('Software de Chatbot en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="8"]').click();
        cy.get('.sub-cat-8 > :nth-child(3)').click();
        cy.contains('Software de Mesa de Ayuda en México').should('exist');
        cy.visit('hhttps://www.dev.comparasoftware.com/bind');

    })
    it('Categorias Hub - Gestión', () => {
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > .active').click();
        cy.contains('Software para Restaurante en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(2)').click();
        cy.contains('Software de Construcción en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(3)').click();
        cy.contains('Software Médico para Clínicas en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#btn-cat-menu > img').click();
        cy.get('[data-pos="9"]').click();
        cy.get('.sub-cat-9 > :nth-child(4)').click();
        cy.contains('Software para Veterinarias en México').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    /// Seccion Buscador 
    it('Campo Buscar - Home', () => {
        cy.get('#search-bar').type('Raptor Web Experience');
        cy.get('li > .relative').should('contain', 'Raptor Web Experience');
        cy.visit('https://www.dev.comparasoftware.com/bind')
        cy.get('#search-bar').type('Ventas');
        cy.get('#results').should('contain', 'Ventas');
        cy.visit('https://www.dev.comparasoftware.com/bind');
        cy.get('#search-bar').type('Software CRM');
        cy.get('#results').should('contain', 'CRM');
    })

    it('Boton Ver Precio | Boton Prueba Gratis', () =>{
        //Ver precio
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

    
    
    //Sección alternativas a $Software ------> Enlaces en pestaña nueva, dejar en pausa por ahora
    // it.only('Seccion Alternativas a $Software', () =>{
    //     cy.get(':nth-child(2) > .flex-row > .flex-col > .w-full > .text-global-gris-5 > .text-ellipsis').invoke('removeAttr', 'target').click();c
    // })

    //Comparador Software vs Software
    it('Comparador Software vs Software', () =>{
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

    //Categorías relacionadas
    it('Categorias Relacionadas', () =>{
        cy.get(':nth-child(1) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Gestión de Almacenes').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');

        cy.get(':nth-child(2) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Gestión de Pedidos').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');

        cy.get(':nth-child(3) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Recursos Humanos').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');

        cy.get(':nth-child(4) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software para Inventarios').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');

        cy.get(':nth-child(5) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Logística').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');

        cy.get(':nth-child(6) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de Distribución').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');

        cy.get(':nth-child(7) > .text-global-gris-5 > .self-center').click();
        cy.contains('Software de gestión de la cadena de suministro').should('exist');
        cy.visit('https://www.dev.comparasoftware.com/bind');
    })

    //Banner agendar llamada
    it('Banner Agendar Llamada' ,() =>{
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
    it('Sección precios', () =>{
        //Primer Form
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

        //Banner escribir una resñea
        it.only('Banner Reseña', () =>{
            cy.get('.pt-4 > .btn').click();
            cy.get('#name').type('Nombre Reseña Test');
            cy.get('#email').type('correoreseñaprueba@gmail.com');
            cy.get('#bussines').type('Empresa prueba');
            cy.get(':nth-child(6) > #custom-select > .select-selected').click();
            cy.get(':nth-child(6) > #custom-select > .select-items > :nth-child(3)').click();
            cy.get(':nth-child(7) > #custom-select > .select-selected').click();
            cy.get(':nth-child(7) > #custom-select > .select-items > :nth-child(3)').click();
            cy.get('#next-btn').click();
            cy.get('#range-data-0').invoke('val', 9).trigger('input');
            cy.get('#range-data-1').invoke('val', 7).trigger('input');
            cy.get('#range-data-2').invoke('val', 5).trigger('input');
            cy.get('#range-data-3').invoke('val', 3).trigger('input');
            cy.get('#btn-reco-9').click();
            cy.get('#next-btn').click();
            cy.get('#pros').type('Pros Prueba Reseña: ¿Qué es lo que más te gusta de Bind?');
            cy.get('#contra').type('Contra: ¿Qué características mejorarías del software?');
            cy.get('#user-ex').type('Describe tu experiencia Describe tu experiencia');
            cy.get('#form-3 > :nth-child(5) > input').click();
            cy.wait(1000);
            cy.get('#switch_product_from').type('Nombre Soft Prueba');
            cy.get('#switch_reason').type('¿Por qué realizaste el cambio? ¿Por qué realizaste el cambio?');
            cy.get(':nth-child(8) > #custom-select > .select-selected').click();
            cy.get(':nth-child(8) > #custom-select > .select-items > :nth-child(2)').click();
            cy.get(':nth-child(9) > #custom-select > .select-selected').click();
            cy.get(':nth-child(9) > #custom-select > .select-items > :nth-child(3)').click();
            cy.get(':nth-child(12) > div > .radio-rol').click();
            cy.get('#submit-btn').click();
            cy.get('h1').should('exist');
            cy.visit('https://www.dev.comparasoftware.com/bind');
        })

})