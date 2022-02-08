import LogInLokalise from './utils/lokalise_login';
import {RandomNumberGenerator} from '../support/helper';
import TestFilters from "../support/filterTests.js";

TestFilters([], () => {
    describe('Add Plural Key and translation in the Project', function () {

        beforeEach(function () {
            const logInLokalise = new LogInLokalise()
            logInLokalise.logIn()
            cy.fixture('testdata').then(function (testData) {
                this.testData = testData
            })
        })

        after(function ()  {
                cy.get('.key-function-button-wrapper > .delete-key').click()
                cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > button:nth-child(1)').click().wait(3000)

                //Delete the existing project
                cy.get('.fontello-menu-projects').click()
                cy.get('.sc-fujyAs.bHMXsA > :nth-child(2) > :nth-child(1) > .sc-fJxALz  .sc-cSiAOC  .sc-ekA-drt  .sc-gVFcvn  .sc-hkeOVe').should('be.visible').click()
                cy.get('.sc-fujyAs.eqBZZJ > div > :nth-child(7)').click()
                cy.get('.btn-danger').click()
                cy.get('.bootbox-form > .bootbox-input').type(this.testData.projectName)
                cy.get('.bootbox > .modal-dialog > .modal-content').contains('Delete project').click()
            }
        )

        it('Go in the project and add Plural Key with just required fields', function () {
            const randomNumberGenerator = new RandomNumberGenerator()
            let uniqueKey = 'UniqueKey' + randomNumberGenerator.randomNumberGenerator(5)

            //Verify if the project exists
            cy.get('.sc-havuDZ').should("have.text", this.testData.projectName)
            cy.get('.bHMXsA > :nth-child(2)').children().should('have.length', 1)

            //Add Plural Key
            cy.get('.sc-havuDZ').click()
            cy.get('.noresult-type.noresult-empty > project-editor > div > div > div > div > div > :nth-child(3) > button').click()
            cy.get('#addkey > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible')

            cy.get('#keyName').type(uniqueKey)
            cy.get('#s2id_autogen6').type('Web{enter}')
            cy.get('a#advanced_tab').click()
            cy.get('.col-sm-3> div > .bootstrap-switch > .bootstrap-switch-container > span.bootstrap-switch-label').click()
            cy.get('#addkey > .modal-dialog > .modal-content > .modal-footer > :nth-child(2)').click()
            cy.get('#s2id_device-s > .select2-choices').children().should('have.length', 2) //2 because of extra text element
            cy.get('#addkey > .modal-dialog > .modal-content > .modal-footer > :nth-child(2) > :nth-child(2)').click()
            cy.wait(10000);
            cy.get('#endless').contains('.page > .row-key > div > div > :nth-child(2) > span > a', uniqueKey).should('be.visible')
        })

        it('Go in the project and add translation in the Plural Key with just required fields', function () {

            //Add text in first key
            cy.get('.sc-havuDZ').click()
            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(2) > .clearfix > div > :nth-child(1) > span').should('be.visible').click()
            cy.get('.lokalise-editor-wrapper .CodeMirror-code')
                .type(this.testData.translationText)
            cy.get('.lokalise-editor-wrapper .editor-panel button.btn.btn-primary').click()

            //Add text in second key
            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(2) > .clearfix > div > :nth-child(2) > span').should('be.visible').click()
            cy.get('.lokalise-editor-wrapper .CodeMirror-code')
                .type(this.testData.translationText)
            cy.get('.lokalise-editor-wrapper .editor-panel button.btn.btn-primary').click()

            //Add translation for first text
            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(2) > .clearfix > div > :nth-child(1) > span').should('be.visible').click()
            cy.get('.lokalise-editor-wrapper .CodeMirror-code')
                .type(this.testData.translatedText)
            cy.get('.lokalise-editor-wrapper .editor-panel button.btn.btn-primary').click()

            //Add translation for second text
            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(2) > .clearfix > div > :nth-child(2) > span').should('be.visible').click()
            cy.get('.lokalise-editor-wrapper .CodeMirror-code')
                .type(this.testData.translatedText)
            cy.get('.lokalise-editor-wrapper .editor-panel button.btn.btn-primary').click()

            //Verify translation exists on page
            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(2) > .clearfix > div > :nth-child(1) > span')
                .should('include.text', this.testData.translatedText)
            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(2) > .clearfix > div > :nth-child(2) > span')
                .should('include.text', this.testData.translatedText)
        })
    })
})