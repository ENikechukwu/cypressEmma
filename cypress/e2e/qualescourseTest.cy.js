/// <reference types= "cypress" />
describe("This test is to validate user can add a course on quales app", () => {
    it("verify user can add a course sucessfully on the app", () => {
      //cypress visits quales academy url
      cy.visit("https://academy.quales.tech/courses/add");
      cy.get('[data-testid="Title*"]').type("onuegbu cypress");
      cy.get('[data-testid="Description*"]').type("postman learning week 6");
      cy.get('#demo-simple-select').click();
      cy.get('[data-testid="isPremium"]').click();
      cy.get('[data-testid="ImageURL"]').type("https://source.unsplash.com/user/c_v_r/900x800");
      cy.get('[data-testid="online"]').click();
      cy.get('.css-tzsjye > .MuiButton-root').click();
     
      
     

    });
  });