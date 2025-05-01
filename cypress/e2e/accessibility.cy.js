/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down';

beforeEach(() => {
  cy.visit('localhost:3000');
});

if (Cypress.env('commandDelay')) {
  slowCypressDown(Cypress.env('commandDelay'));
}

describe('Accessibility Tests', () => {
  it('Has appropriate aria-labels', () => {
    // Check if the input has the correct aria-label
    cy.get('[data-testid="input-number"]').should('have.attr', 'aria-label', 'Enter the increment value');

    // Check if the increment button has the correct aria-label
    cy.get('[data-testid="btn-increment"]').should('have.attr', 'aria-label', 'Increment the counter result');

    // Check if the reset button has the correct aria-label
    cy.get('[data-testid="btn-reset"]').should('have.attr', 'aria-label', 'Reset the counter');
  });

  it('Announces changes to the counter value', () => {
    // Ensure the result element has aria-live set to polite
    cy.get('[data-testid="result"]').should('have.attr', 'aria-live', 'polite');

    // Increment the counter and check if the value updates
    cy.get('[data-testid="btn-increment"]').click();
    cy.get('[data-testid="result"]').should('have.text', '1');
  });

  it('Supports keyboard navigation', () => {
    // Focus on the input and increment using the keyboard
    cy.get('[data-testid="input-number"]').focus();
    cy.get('[data-testid="input-number"]').type('{uparrow}');
    cy.get('[data-testid="input-number"]').should('have.value', '2');
  });
});