describe("Signup Page Functionality", () => {
  const pageUrl = "http://localhost:3000/signup"; // Assuming your signup page is at /signup

  beforeEach(() => {
    cy.visit(pageUrl);
  });

  it("checks for the heading 'Sign up'", () => {
    cy.get("h1").contains("Sign up");
  });

  it("fills all fields and attempts to submit the form", () => {
    cy.get("#userName").type("completeuser");
    cy.get("#email").type("complete@example.com");
    cy.get("#password").type("AnotherStrongPassword456!");

    // Click the submit button
    cy.get("button[type='submit']")
      .should("be.visible")
      .click();
  });

  it("checks the 'Log In' link navigates to the login page", () => {
    cy.contains("Log In") 
      .should("have.attr", "href", "./login/")
      .click(); 

    // Assert that the URL has changed to the login page
    cy.url().should("include", "/login");
  });
});