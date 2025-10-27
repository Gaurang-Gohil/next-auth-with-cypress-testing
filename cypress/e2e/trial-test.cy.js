describe("Enter details:", ()=>{
    it("checks for the heading", ()=>{
        cy.visit("http://localhost:3000/")
        cy.get("h1").contains("Sign up")
    })
    
    it("finds and add text to username", ()=>{
        cy.visit("http://localhost:3000/")
        cy.get("username").type("GG")
    })
});

it('Input username', function() {});
