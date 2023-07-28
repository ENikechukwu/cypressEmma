/// <reference types= "cypress" />
describe("This test is to validate login scenarios into the quales app", () => {
    it("Verify user with correct correct credentials can login to the app", () => {
      
      cy.visit("https://academy.quales.tech/login");
      cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
      cy.get('[data-testid="Password"]').type("pass1234");
      cy.get('.MuiButton-contained').click();
      cy.contains('Login Successfull').should("be.visible");

      cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
      cy.viewport("macbook-16");
      cy.get('[data-testid="Title*"]').type("Cypress practice Nik");
      cy.get('[data-testid="Description*"]').type("Second Practice Course");
      cy.get('#demo-simple-select').click();
      cy.get('[data-value="2"]').click();
      cy.get('[data-testid="ImageURL"]').type("https://technext.ng/wp-content/uploads/2022/02/Downloader.la-6201317f2be86.jpg");
      cy.get('[data-testid="online"]').click();
      cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').type("https://www.youtube.com/watch?v=8vXoMqWgbQQ");
      cy.get('.css-tzsjye > .MuiButton-root').click();
      cy.contains('Cypress practice Nik').should("be.visible");


      

    });
  });
