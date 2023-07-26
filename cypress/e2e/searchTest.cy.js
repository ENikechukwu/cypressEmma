/// <reference types= "cypress" />
describe("This test is to ensure that user can search on google", () => {
    it("search for quales consulting on google", () => {
      //cypress visits quales academy url
      cy.visit("https://www.google.com/");
      cy.get('#APjFqb').type("quales consulting");
      cy.get('.FPdoLc > center > .gNO89b').click();
      cy.get(':nth-child(5) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').should("be.visible");
      
     

    });
  });