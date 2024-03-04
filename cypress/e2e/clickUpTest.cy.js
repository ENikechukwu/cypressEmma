/// <reference types= "cypress" />
describe("This test is to validate Task scenarios on the Clickup web app", () => {
    it("Verify user with correct credentials can login to the app", () => {
      
      cy.visit("https://app.clickup.com/login");
      cy.get('[data-test="login-email-input"]').type("emma.onuegbu11@gmail.com");
      cy.get('[data-test="login-password-input"]').type("Emenike1965{Enter}");
      cy.get('[data-test="avatar"]').should("be.visible");



      
      





      

    });
  });
