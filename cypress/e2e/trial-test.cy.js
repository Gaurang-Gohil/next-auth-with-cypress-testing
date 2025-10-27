// cypress/e2e/signup.cy.js

describe("Signup Page Functionality", () => {
  const pageUrl = "http://localhost:3000/signup"; // Assuming your signup page is at /signup

  beforeEach(() => {
    // Visit the signup page before each test
    cy.visit(pageUrl);
  });

  it("checks for the heading 'Sign up'", () => {
    cy.get("h1").contains("Sign up");
  });

  it("finds and adds text to the Username input field", () => {
    // Target the input specifically by its 'id' attribute
    cy.get("#userName")
      .should("be.visible") // Assert that the input is visible
      .type("testuser") // Type some text into the field
      .should("have.value", "testuser"); // Verify the value
  });

  it("finds and adds text to the Email input field", () => {
    cy.get("#email")
      .should("be.visible")
      .type("test@example.com")
      .should("have.value", "test@example.com");
  });

  it("finds and adds text to the Password input field", () => {
    cy.get("#password")
      .should("be.visible")
      .type("StrongPassword123!")
      .should("have.value", "StrongPassword123!");
  });

  it("fills all fields and attempts to submit the form", () => {
    cy.get("#userName").type("completeuser");
    cy.get("#email").type("complete@example.com");
    cy.get("#password").type("AnotherStrongPassword456!");

    // Click the submit button
    cy.get("button[type='submit']")
      .should("be.visible")
      .click();

    // After submission, you'd typically assert on the next page,
    // a success message, or a network request.
    // For now, let's just assert that the URL might change or something.
    // Replace with your actual post-submission assertion.
    // cy.url().should('include', '/dashboard'); // Example
    // cy.contains('Welcome!').should('be.visible'); // Example
  });

  it("checks the 'Log In' link navigates to the login page", () => {
    cy.contains("Log In") // Find the text 'Log In'
      .should("have.attr", "href", "./login/") // Verify its href attribute
      .click(); // Click the link

    // Assert that the URL has changed to the login page
    cy.url().should("include", "/login");
  });
});