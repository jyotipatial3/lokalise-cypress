import TestFilters from '../support/filterTests.js';
import LogInLokalise from './utils/lokalise_login';

TestFilters([], () => {
    describe('Add First Project', function () {

        before(function () {
            const logInLokalise = new LogInLokalise()
            logInLokalise.logIn()
            cy.fixture('testdata').then(function (testData) {
                this.testData = testData
            })
        })

        it('Add project with just required fields', function () {
            //Add project
            cy.get('.sc-iIgjPs').should("be.visible")
            cy.get('.sc-iIgjPs > .sc-fnVZcZ').click()
            cy.get(':nth-child(1) > :nth-child(2) > .sc-kHWWYL > .sc-dlMDgC > .sc-hOPeYd').type(this.testData.projectName)
            cy.get(':nth-child(3) > :nth-child(2) > .sc-fuISkM > .sc-jQAxuV > .Select__control > .Select__value-container').click()
                .type('German (de){enter}')
            cy.get('#tabs--1--panel--0 > form > .sc-euEtCV > .sc-eCApnc > .sc-dlMDgC > .EUsjE > .sc-bkbkJK > .sc-iemWCZ').click().wait(2000)

            //Verify if the project has been added
            cy.get('.sc-dvUynV').should("include.text", this.testData.projectName)
            cy.get('.fontello-menu-projects').click()
            cy.url().should('include', '/projects')
            cy.get('.bHMXsA > :nth-child(2)').children().should('have.length', 1)
        })
    })
})