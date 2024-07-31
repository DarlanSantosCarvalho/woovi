describe("should sign up", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get("a").click();

    cy.get('[placeholder="Nome completo"]').type("Jane Doe");

    cy.get('[placeholder="Email"]').type("example@example.com");

    cy.get('[placeholder="Senha"]').type("Darlan Carvalho");

    cy.get('[placeholder="Data de nascimento"]').type("2001-12-17");

    cy.get('[placeholder="CPF"]').type("11111111111");

    cy.get('[placeholder="RG"]').type("1111111111");

    cy.get('[placeholder="CEP"]').type("40020000");

    cy.get(".py-3").click();

    cy.get(".mb-14").click();

    cy.get(".mb-14").click();
  });
});
