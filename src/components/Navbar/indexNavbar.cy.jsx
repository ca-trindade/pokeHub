import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Navbar } from "./index";

describe("<Navbar />", () => {
  it("renders", () => {
    cy.mount(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    cy.get("[data-cypress=logo]").should("be.visible").and("exist");
    cy.get(".sc-dIUfKc").should("be.visible");
    
  });
});
