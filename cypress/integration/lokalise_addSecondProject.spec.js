import LogInLokalise from './utils/lokalise_login';
import TestFilters from "../support/filterTests.js";

TestFilters([], () => {
    describe('Add nth Project', function () {

        before(function () {
            const logInLokalise = new LogInLokalise()
            logInLokalise.logIn()
            cy.fixture('testdata').then(function (testData) {
                this.testData = testData
            })
        })

        after(function () {
            //Delete the project
            cy.get('.sc-fujyAs.bHMXsA > :nth-child(2) > :nth-child(2) > .sc-fJxALz  .sc-cSiAOC  .sc-ekA-drt  .sc-gVFcvn  .sc-hkeOVe').should('be.visible').click()
            cy.get('.sc-fujyAs.eqBZZJ > div > :nth-child(7)').click()
            cy.get('.btn-danger').click()
            cy.get('.bootbox-form > .bootbox-input').type(this.testData.secondProjectName)
            cy.get('.bootbox > .modal-dialog > .modal-content').contains('Delete project').click()
        })

        it('Add another project with just required fields', function () {
            //Add second project
            cy.get(':nth-child(1) > :nth-child(1) > .sc-fnVZcZ > .sc-bkbkJK > .sc-iemWCZ').click()
            cy.get(':nth-child(1) > :nth-child(2) > .sc-kHWWYL > .sc-dlMDgC > .sc-hOPeYd').type(this.testData.secondProjectName)
            cy.get(':nth-child(3) > :nth-child(2) > .sc-fuISkM > .sc-jQAxuV > .Select__control > .Select__value-container').click()
                .type('German (de){enter}')
            cy.get('#tabs--1--panel--0 > form > .sc-euEtCV > .sc-eCApnc > .sc-dlMDgC > .EUsjE > .sc-bkbkJK > .sc-iemWCZ').click()

            //Verify if the project has been added and number of projects created
            cy.get('.sc-dvUynV').should("include.text", this.testData.secondProjectName)
            cy.get('.fontello-menu-projects').click()
            cy.url().should('include', '/projects')
            cy.get('.bHMXsA > :nth-child(2)').children().should('have.length', 2)
        })
    })
})