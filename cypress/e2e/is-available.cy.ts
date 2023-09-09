describe("Сервис доступен", () => {
  it("Сервис должен быть доступен на localhost:3000", () => {
    cy.visit("http://localhost:3000");
  });
});
