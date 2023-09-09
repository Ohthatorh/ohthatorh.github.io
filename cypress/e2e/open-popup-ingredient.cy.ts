describe("Проверка открытия и закрытия попапа с ингредиентом", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("По дефолту открыта главная страница", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Соберите бургер");
  });

  it("При клике на ингредиент попап должен открыться и закрыться", () => {
    cy.visit("http://localhost:3000");
    cy.get("li").contains("Краторная булка N-200i").click();
    cy.contains("Детали ингредиента");
    cy.get("#modals").find("button").click();
  });
});
