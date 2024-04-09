/// <reference types="cypress" />

context('Seccion top 10 soft cards', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    })


it('Sección Top 10 Software | Home', () => {
        
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Bind').click();
    cy.contains('Bind').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'FinanSaaS').click();
    cy.contains('FinanSaaS').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Raptor Web Experience').click();
    cy.contains('Raptor Web Experience').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'SisTrade ERP CMMS').click();
    cy.contains('SisTrade ERP CMMS').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Defontana').click();
    cy.contains('Defontana').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Goujana').click();
    cy.contains('Goujana').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Rocket ERP').click();
    cy.contains('Rocket ERP').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'ibSoft PyME').click();
    cy.contains('ibSoft PyME').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'NetSuite ERP').click();
    cy.contains('NetSuite ERP').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //
    cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'SAP Business One').click();
    cy.contains('SAP Business One').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');

    ////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'MP Total').click();
    cy.contains('MP Total').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'EasyMaint').click();
    cy.contains('EasyMaint').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', '...').click();
    cy.contains('WGM - Works Gestión de Mantenimiento').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'SisTrade ERP CMMS').click({force: true});
    cy.contains('SisTrade ERP CMMS').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Allie Systems').click();
    cy.contains('Allie Systems').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Maxpanda CMMS').click();
    cy.contains('Maxpanda CMMS').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'InnoMaint').click();
    cy.contains('InnoMaint').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'MaintScape').click();
    cy.contains('MaintScape').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'SoftMant').click();
    cy.contains('SoftMant').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    //////////
    cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Fracttal One').click();
    cy.contains('Fracttal One').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');

    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Upnify').click();
    cy.contains('Upnify').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Upnify').click();
    cy.contains('Upnify').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Simla.com').click();
    cy.contains('Simla.com').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'centiaCRM').click();
    cy.contains('centiaCRM').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Microsoft Dynamics CRM').click();
    cy.contains('Microsoft Dynamics CRM').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'HubSpot CRM').click();
    cy.contains('HubSpot CRM').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Salesforce CRM').click();
    cy.contains('Salesforce CRM').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Zoho CRM').click();
    cy.contains('Zoho CRM').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'DataCRM').click();
    cy.contains('DataCRM').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'Simply').click();
    cy.contains('Simply').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
    ///
    cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
    cy.contains('.text-center > h3', 'NetSuite CRM').click();
    cy.contains('NetSuite CRM').should('exist');
    cy.visit('https://www.dev.comparasoftware.com/');
})
})