import { Provider } from "react-redux";
import { store } from "../../store/store";
import { SearchInput } from "./index";

describe("<SearchInput />", () => {
  it("validate valid search input", () => {
    cy.mount(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    cy.get("#searchPokemon").should("be.visible");
    cy.get("[data-cypress=goButton]").should("be.visible");
    cy.get("#searchPokemon").type("Bulbasaur");
    cy.get("[data-cypress=goButton]").click();
  });
  it("validate invalid search input", () => {
    cy.mount(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    cy.get("#searchPokemon").should("be.visible");
    cy.get("[data-cypress=goButton]").should("be.visible");
    cy.get("#searchPokemon").type(77);
    cy.get("[data-cypress=goButton]").click();
    cy.get("#errorMessage").should("have.text", "Insert a valid name");
  });
});
