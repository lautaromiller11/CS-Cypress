context('Home', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/');
        cy.viewport(393, 852);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
        cy.wait(2000);
    });

    it('Menú Desplegable - Categorías | Enlaces', () => {
        cy.get('#btn-hamburger-cat-menu').click();
        cy.contains('span', 'Categorías').click();

        const categorias = [
            { nombre: 'Automatización de Marketing', url: '/software-de-automatizacion-de-marketing' },
            { nombre: 'Email Marketing', url: '/software-de-email-marketing' },
            { nombre: 'Marketing en Redes Sociales', url: '/software-de-marketing-en-redes-sociales' },
            { nombre: 'CRM', url: '/software-crm' },
            { nombre: 'Ventas', url: '/software-de-ventas' },
            { nombre: 'Mantenimiento', url: '/software-de-mantenimiento' },
            { nombre: 'Mantenimiento de Equipos Médicos', url: '/software-de-mantenimiento-de-equipos-medicos' },
            { nombre: 'Software de Mantenimiento Predictivo', url: '/software-de-mantenimiento-predictivo' },
            { nombre: 'ERP', url: '/erp' },
            { nombre: 'Producción y Fabricación', url: '/produccion-y-fabricacion' },
            { nombre: 'Software de Gestión de Calidad', url: '/software-de-gestion-de-calidad' },
            { nombre: 'Inventarios', url: '/software-de-inventarios' },
            { nombre: 'Software de Análisis Estadístico', url: '/software-de-analisis-estadistico' },
            { nombre: 'Software de Gestión de Base de Datos', url: '/software-de-gestion-de-base-de-datos' },
            //{ nombre: 'Inteligencia de Negocio', url: '/software-de-business-intelligence' },
            //{ nombre: 'Software de Gestión de Desempeño Empresarial', url: '/software-de-gestion-de-desempeno-empresarial' },
            { nombre: 'Software de Recursos Humanos', url: '/software-de-recursos-humanos' },
            { nombre: 'Software de Pago de Nómina', url: '/software-de-pago-de-nomina' },
            { nombre: 'Software de facturación', url: '/software-de-facturacion' },
            { nombre: 'Firma Electrónica', url: '/software-de-firma-digital' },
            { nombre: 'Software de Cobranza', url: '/software-de-cobranza' },
            //{ nombre: 'Software de E-Learning', url: '/software-de-e-learning' },
            { nombre: 'Software Educativo', url: '/software-educativo' },
            { nombre: 'Software LMS', url: '/software-lms' },
            { nombre: 'Atención al cliente', url: '/software-de-atencion-al-cliente' },
            { nombre: 'Chatbot', url: '/software-de-chatbot' },
            { nombre: 'Mesa de Ayuda', url: '/software-de-mesa-de-ayuda' },
            { nombre: 'Administración de Restaurantes', url: '/software-de-administracion-de-restaurantes' },
            { nombre: 'Construcción', url: '/software-de-construccion' },
            { nombre: 'Médico para Clínicas', url: '/software-medico-para-clinicas' },
            { nombre: 'Veterinario', url: '/software-veterinario' },
        ];

        categorias.forEach((categoria) => {
            cy.contains('span', categoria.nombre).click();
            cy.contains('Software').should('exist');
            cy.go('back');
            cy.get('#btn-hamburger-cat-menu').click();
            cy.contains('span', 'Categorías').click();
        });
    });

    it('Menú Desplegable - Botón Todas las Categorias', () => {
        cy.get('#btn-hamburger-cat-menu').click();
        cy.get('a.btn.btn-primary-outlined').click();
        cy.get('.page-header-title').should('exist');
    });

    it('Menú Desplegable - Software Populares | Enlaces', () => {
        // Abre el desplegable de "Software populares"
        cy.get('#btn-hamburger-cat-menu').click();
        cy.get('button.btn-question').contains('Software populares').click();

        // Define el arreglo con los software y sus URLs
        const softwarePopulares = [
            { nombre: 'Salesforce CRM', url: '/salesforce' },
            { nombre: 'NetSuite ERP', url: '/oracle-netsuite' },
            { nombre: 'SAP S/4HANA Cloud', url: '/sap-s-4hana-cloud' },
            { nombre: 'Tableau Software', url: '/tableau-visualizacion-de-datos' },
            { nombre: 'Defontana', url: '/defontana' },
            { nombre: 'monday.com', url: '/monday' },
            { nombre: 'Laudus ERP de Gestión', url: '/laudus-erp-de-gestion' },
            //{ nombre: 'Freshsales', url: '/freshsales' },
            { nombre: 'NetSuite CRM', url: '/netsuite-crm' },
            { nombre: 'Epicor Kinetic ERP', url: '/epicor-erp' },
        ];

        softwarePopulares.forEach((software) => {
            // Encuentra el software en el desplegable y hace clic en el enlace
            cy.contains('span', software.nombre).click();

            // Verifica si hay un mensaje de error 404
            cy.get('body').then(($body) => {
                if ($body.text().includes('Error 404')) {
                    // Si se encuentra el mensaje de error 404, el test falla
                    assert.fail(`La página para ${software.nombre} muestra un error 404.`);
                } else {
                    // Verifica que el contenido de la página redirigida contenga "Software"
                    cy.get('p').should('be.visible').and('contain.text', 'Software');
                }
            });

            // Vuelve a la página inicial para continuar con el siguiente software
            cy.go('back');

            // Reabre el desplegable de "Software populares"
            cy.get('#btn-hamburger-cat-menu').click();
            cy.get('button.btn-question').contains('Software populares').click();
        });
    });

    it('Menú Desplegable - Botón solicitar asesoría', () => {
        cy.get('#btn-hamburger-cat-menu').click();
        cy.get('button.btn-question').contains('Software populares').click();
        cy.get('a').contains('Solicitar asesoría sin costo').first().click({ force: true });
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
    it.only('Buscador en el navbar', () =>{
        cy.get('#search-icon-header').click();
        cy.get('.appearance-none').click().type('Raptor Web Experience')
        cy.get(':nth-child(5) > .px-2').should('contain', 'Raptor Web Experience');
    
    })
    
    
});


