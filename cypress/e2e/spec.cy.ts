describe("template spec", () => {
  it("passes", () => {
    cy.visit("localhost:5173/");

    cy.get("#text-area-input").type("Texto inventado para probar");

    cy.get("#text-area-input-2").type("Esto es una prueba");

    cy.get("#text-area-input-3").type(
      "texto para probar la velocidad de escritura texto para probar la velocidad de escritura texto para probar la velocidad de escritura"
    );
  });
});
