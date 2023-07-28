/// <reference types= "cypress" />
describe("This test is to ensure user can delete a course on quales app", () => {
    it("verify user with correct credentials can login to the app", () => {
      //cypress visits quales academy url
      cy.visit("https://academy.quales.tech/login");
      cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
      cy.get('[data-testid="Password"]').type("pass1234");
      cy.get('.MuiButton-contained').click();
      cy.contains('Login Successfull').should("be.visible");

      cy.get(':nth-child(4) > .MuiCardMedia-root').click();
      cy.get('.css-wvpqgg').click();
      cy.get('.MuiBox-root > .MuiButton-contained').click();
     

    });
  });