class loginPage {

    usernameInput() {
        return cy.get(':nth-child(1) > .sc-hYRTwp')
    }

    passwordInput() {
        return cy.get(':nth-child(2) > .sc-hYRTwp')
    }

    loginBtn() {
        return cy.get('.sc-dSnXvR')
    }
}
export default loginPage