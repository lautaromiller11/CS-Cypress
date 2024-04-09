/// <reference types="cypress" />

context('Seccion top 10 soft cards', () => {
    beforeEach(() => {
        cy.visit('https://www.dev.comparasoftware.com/')
        cy.viewport(1480, 820);
        cy.wait(4000);
        cy.contains('Seguir en México').click();
    })


    it('Sección Top 10 Software | Home', () => {
        const softwareList = [
            'Bind', 'FinanSaaS', 'Raptor Web Experience', 'SisTrade ERP CMMS', 'Defontana',
            'Goujana', 'Rocket ERP', 'ibSoft PyME', 'NetSuite ERP', 'SAP Business One',
            'MP Total', 'EasyMaint', 'WGM - Works Gestión de Mantenimiento', 'SisTrade ERP CMMS',
            'Allie Systems', 'Maxpanda CMMS', 'InnoMaint', 'MaintScape', 'SoftMant',
            'Fracttal One', 'Upnify', 'Simla.com', 'centiaCRM', 'Microsoft Dynamics CRM',
            'HubSpot CRM', 'Salesforce CRM', 'Zoho CRM', 'DataCRM', 'Simply', 'NetSuite CRM'
        ];
    
        softwareList.forEach(software => {
            cy.get(':nth-child(2) > .p-3 > .dropdown-btn').click();
            cy.contains('.text-center > h3', software).click();
            cy.contains(software).should('exist');
            cy.visit('https://www.dev.comparasoftware.com/');
        });
        cy.get(':nth-child(3) > .p-3 > .dropdown-btn').click();
        softwareList.forEach(software => {
            cy.contains('.text-center > h3', software).click();
            cy.contains(software).should('exist');
            cy.visit('https://www.dev.comparasoftware.com/');
        });
        cy.get(':nth-child(4) > .p-3 > .dropdown-btn').click();
        softwareList.forEach(software => {
            cy.contains('.text-center > h3', software).click();
            cy.contains(software).should('exist');
            cy.visit('https://www.dev.comparasoftware.com/');
        });
    });
})