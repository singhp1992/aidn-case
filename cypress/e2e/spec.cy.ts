// using e2e testing since cypress component testing does not support Next 14
describe("Check the select div", () => {
  it("focuses & clicks on the element", () => {
    // testing locally
    cy.visit("http://localhost:3000");

    // finding the div that should be focused
    cy.get('div[id="focus"]').focus();
    // the background color needed to be in rgb to work correctly
    cy.get('div[id="focus"]').should(
      "have.css",
      "background-color",
      "rgb(183, 250, 172)"
    );

    // first checking to see if the "options" are NOT visible before clicking
    cy.get('div[id="options"]').should("not.exist");

    // clicking on div to check the toggle state
    cy.get('div[id="focus"]').click();

    // second: checking to see if the "options" are visible after clicking
    cy.get('div[id="options"]').should("exist");
  });
});

// to get rid of describe error
export {};
