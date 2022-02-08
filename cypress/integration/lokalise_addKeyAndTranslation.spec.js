import LogInLokalise from './utils/lokalise_login';
import {RandomNumberGenerator} from '../support/helper';
import TestFilters from "../support/filterTests";

let randomNumberGenerator;
let uniqueKey;

TestFilters([], () => {

    describe('Add Key and Translation in the Project', function () {

        beforeEach(function () {
            const logInLokalise = new LogInLokalise()
            logInLokalise.logIn()
            cy.fixture('testdata').then(function (testData) {
                this.testData = testData
            })
        })

        after(function () {
                cy.get('.key-function-button-wrapper > .delete-key').click()
                cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > button:nth-child(1)').click()
            }
        )

        it('Go in the project and add Key with just required fields', function () {
            randomNumberGenerator = new RandomNumberGenerator()
            uniqueKey = 'UniqueKey' + randomNumberGenerator.randomNumberGenerator(5)

            //Verify if the project exists
            cy.get('.sc-havuDZ').should("have.text", this.testData.projectName)
            cy.get('.bHMXsA > :nth-child(2)').children().should('have.length', 1)

            //Add Key
            cy.get('.sc-havuDZ').click()
            cy.get('.noresult-type.noresult-empty > project-editor > div > div > div > div > div > :nth-child(3) > button').click()
            cy.get('#addkey > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible')

            cy.get('#keyName').type(uniqueKey)
            cy.get('#s2id_autogen6').type('Web{enter}')
            cy.get('#addkey > .modal-dialog > .modal-content > .modal-footer > :nth-child(2)').click()
            cy.get('#s2id_device-s > .select2-choices').children().should('have.length', 2) //2 because of extra text element
            cy.get('#addkey > .modal-dialog > .modal-content > .modal-footer > :nth-child(2) > :nth-child(2)').click()
            cy.wait(10000)
            cy.get('#endless').contains('.page > .row-key > div > div > :nth-child(2) > span > a', uniqueKey).should('be.visible')
        })

        it('Go in the project and add translation in the Key with just required fields', function () {

            //Add translation
            cy.get('.sc-havuDZ').click()
            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(2) > .clearfix > .modified-info-wrapper > div').click()
            cy.get(' .page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(2) > .clearfix > .modified-info-wrapper > div > :nth-child(2)')
                .type(this.testData.translationText)
            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(2) > .clearfix > .modified-info-wrapper > div > :nth-child(3) > button.btn.btn-primary').click()

            cy.get(' .page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(2) > .clearfix > .modified-info-wrapper').click()
            cy.get('[data-engine="google"]').click()
            cy.get('.editor-suggestions-panel > editor-suggestions-panel > div > div > div > div > div > :nth-child(2) > div > :nth-child(2)').click()
            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > tr > :nth-child(2) > .clearfix > .modified-info-wrapper > div > :nth-child(3) > button.btn.btn-primary').click()

            cy.get('.page.current > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(2) > .clearfix > .modified-info-wrapper > div').should('include.text', this.testData.translatedText)
        })
    })
})