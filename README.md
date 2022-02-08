# Lokalise-Cypress
Cypress is a next generation front end testing tool built for the modern web applications. 
This is an automated project for Lokalise testing done using with Cypress.

## Tools versioning used
```python
npm --version 6.14.15
cypress --version 9.4.1
```
## How to Start
1. Clone the project
2. Install all the dependencies
   ```bash
   npm -i
   npm install cypress --save-dev
   ```
3. To execute the tests in CLI
   ```bash
   npx cypress open
   ```
4. To execute tests and create HTML reports
   ```bash
   npm run test:cli
   npm run create:html:report
   ```

## Scenarios covered in this test
Test execution videos can be found under cypress/videos
1. lokalise_addFirstProject -->
   
   This spec file covers 'Adding first project' and verifies if only one project is created successfully
2. lokalise_addSecondProject -->
   
   This spec file covers 'Adding nth project' and verifies if the second project is created successfully. After the verification is done, the project is deleted
3. lokalise_addKeyAndTranslation -->
   
   This spec file covers 'Adding first key' and 'Add translation for plain key'. Here, verification is done on whether the key has been successfully created inside the existing empty project or not, and then adding and verifying translation added to that key. After the verification is performed, added key in the project is deleted
4. lokalise_addPluralKeyAndTranslation -->
   
   This spec file covers 'Adding plural key' and 'Add translation for plural key'. Here, verification is done on whether the key has been successfully created inside the existing empty project or not, and then adding and verifying translation added to that key. After the verification is performed, added key and the project is deleted

## Articles on Cypress
- [How to Install Cypress](https://testersdock.com/how-to-install-cypress/)
- [Understanding Cypress Folder Structure](https://testersdock.com/cypress-folder-structure/)
- [How to execute Cypress Tests using Test Runner and CLI](https://testersdock.com/cypress-test-runner-cli/)
- [Writing your First Test in Cypress](https://testersdock.com/first-cypress-test/)
- [How to use Fixtures in Cypress Tests](https://testersdock.com/cypress-fixtures/)
- [How to interact with multiple elements using each()](https://testersdock.com/cypress-each/)
- [Conditional Testing (If Else) in Cypress](https://testersdock.com/cypress-conditional-if-else-testing/)
- [API Testing in Cypress](https://testersdock.com/cypress-api-testing/)
- [How to execute Cypress Tests in order](https://testersdock.com/cypress-execute-tests-in-order/)
- [How to handle Shadow DOM in Cypress](https://testersdock.com/cypress-shadow-dom/)
- [How to retry tests X number of times in Cypress](https://testersdock.com/test-retries-in-cypress/)
- [How to handle Iframes in Cypress](https://testersdock.com/iframes-cypress/)
- [How to generate HTML reports in Cypress](https://testersdock.com/html-reports-cypress/)
- [How to Add Tags like Smoke,E2E to Cypress Tests](https://testersdock.com/cypress-test-tags/)
- [Cypress Page Object with Locator Functions and Custom Commands](https://testersdock.com/cypress-page-object-with-locator-function-and-custom-command/)
- [Cypress Dashboard](https://testersdock.com/cypress-dashboard/)
- [How to visually generate tests with no coding in Cypress Studio](https://testersdock.com/cypress-studio/)
- [How to mock an API using cy.intercept()](https://testersdock.com/cypress-mock-api-intercept/)
- [How to hover over elements in Cypress](https://testersdock.com/cypress-hover/)
- [How to use parents(), parent() and children() commands in Cypress](https://testersdock.com/cypress-parents-parent-children/)
- [How to perform Drag and Drop on HTML and Angular sites with Cypress](https://testersdock.com/cypress-drag-and-drop-html-angular/)
- [How to handle new browser tab and window in Cypress](https://testersdock.com/cypress-new-window/)
