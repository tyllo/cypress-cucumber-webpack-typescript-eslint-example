import { Given, Then } from 'cypress-cucumber-preprocessor/steps';


Given('webpack is configured', (): void => {
  cy.wrap(true)
    .should('eq', true);
});

Then('this test should work just fine!', (): void => {
  cy.wrap(true)
    .should('eq', true);
});
