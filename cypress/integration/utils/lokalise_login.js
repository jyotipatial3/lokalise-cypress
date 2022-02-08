const baseURL = "https://stage.lokalise.com/projects";
const userName = "jyoti.patial@trivago.com";
const password = "Jyoti@1234";

export default class LogInLokalise {
    logIn() {
        cy.visit(baseURL);
        cy.get(".knhmrw").should("be.visible");
        cy.get(":nth-child(1) > .sc-hYRTwp").type(userName);
        cy.get(":nth-child(2) > .sc-hYRTwp").type(password);
        cy.get('.sc-dSnXvR').click();
    }
}