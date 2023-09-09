import "@4tw/cypress-drag-drop";

describe("Создание заказа", () => {
  before(() => {
    cy.visit("/");
  });

  it("По дефолту открыта главная страница", () => {
    cy.visit("/");
    cy.contains("Соберите бургер");
  });

  it("Оформление заказа", () => {
    cy.visit("/");
    cy.get("li").contains("Краторная булка N-200i").drag("#burger-constructor");
    cy.get("li")
      .contains("Биокотлета из марсианской Магнолии")
      .drag("#burger-constructor");
    cy.get("li").contains("Соус Spicy-X").drag("#burger-constructor");
    cy.get("button").contains("Оформить заказ").click();
    cy.contains("Вход");
    cy.get("form").within(() => {
      cy.get("input:first").type("ohthatorh@yandex.ru");
      cy.get("input:last").type("123456");
    });
    cy.get("button").contains("Войти").click();
    cy.contains("Соберите бургер");
    cy.get("button").contains("Оформить заказ").click();
    cy.wait(15000);
    cy.contains("идентификатор заказа");
    cy.get("#modals").find("button").click();
  });
});
