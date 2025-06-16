/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down' // slow down the tests

beforeEach(() => { // before every test - clean state
  cy.visit('localhost:3000')
});

if(Cypress.env('commandDelay')) {
  slowCypressDown(Cypress.env('commandDelay'))
}

describe('Calculates Result', () => {
  it('Increments by 1', () => {
    cy.get('[data-testid="btn-increment"]').click()
    cy.get('[data-testid="result"]').should('have.text', '1')
    cy.get('[data-testid="btn-increment"]').click()
    cy.get('[data-testid="result"]').should('have.text', '2')
  })
  it('Decrements by 1', () => {
    cy.get('[data-testid="btn-decrement"]').click()
    cy.get('[data-testid="result"]').should('have.text', '-1')
    cy.get('[data-testid="btn-decrement"]').click()
    cy.get('[data-testid="result"]').should('have.text', '-2')
  })
})

describe('Reset button', () => {
  it('sets to initial values', () => {
    cy.get('[data-testid="btn-reset"]').click() // when in default state
    cy.get('[data-testid="input-number"]').should('have.value', '1')
    cy.get('[data-testid="result"]').should('have.text', '0')
    
    cy.get('[data-testid="btn-increment"]').click() // when result has been incremented
    cy.get('[data-testid="result"]').should('have.text', '1')
    cy.get('[data-testid="btn-reset"]').click()
    cy.get('[data-testid="result"]').should('have.text', '0')

    cy.get('[data-testid="input-number"]').type('{selectAll}2') // when both result and input have changed
    cy.get('[data-testid="input-number"]').should('have.value', '2').trigger('change')
    cy.get('[data-testid="btn-increment"]').click()
    cy.get('[data-testid="input-number"]').should('have.value', '2')
    cy.get('[data-testid="result"]').should('have.text', '2')
    cy.get('[data-testid="btn-reset"]').click()
    cy.get('[data-testid="input-number"]').should('have.value', '1')
    cy.get('[data-testid="result"]').should('have.text', '0')
  })
})