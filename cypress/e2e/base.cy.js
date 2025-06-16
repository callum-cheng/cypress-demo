/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down' // slow down the tests

beforeEach(() => { // before every test - clean state
  cy.visit('localhost:3000')
});

if(Cypress.env('commandDelay')) {
  slowCypressDown(Cypress.env('commandDelay'))
}

describe('My First Test', () => { // Describe and it titles can be anything
  it('Loads the page', () => {
    cy.get('h1').contains('Counter') // 'find h1 element'
    cy.get('[data-testid="prompt"]').should('contain', 'Adjust by:') // another approach 'assert element'
  })
})

describe('Counter Default Values', () => { // Default values for input and result
  it('Input starts at 1', () => {
    cy.get('[data-testid="input-number"]').should('have.value', '1') // input tag uses value
  })
  it('Result starts at 0', () => {
    cy.get('[data-testid="result"]').should('have.text', '0') // p tag uses text
  })
})

describe('Input Number', () => {
  it('Increments by 1', () => {
    cy.get('[data-testid="input-number"]').type('{upArrow}')
    cy.get('[data-testid="input-number"]').should('have.value', '2')
    cy.get('[data-testid="input-number"]').type('{upArrow}')
    cy.get('[data-testid="input-number"]').should('have.value', '3')
    cy.get('[data-testid="input-number"]').type('{downArrow}')
    cy.get('[data-testid="input-number"]').should('have.value', '2')
  })
  it('Minimum value is 1', () => {
    cy.get('[data-testid="input-number"]').type('{downArrow}')
    cy.get('[data-testid="input-number"]').should('have.value', '1')
    cy.get('[data-testid="input-number"]').type('{downArrow}')
    cy.get('[data-testid="input-number"]').should('have.value', '1')
    cy.get('[data-testid="input-number"]').type('{downArrow}')
    cy.get('[data-testid="input-number"]').should('have.value', '1')
  })
  it('Allows typing a number', () => {
    cy.get('[data-testid="input-number"]').clear()
    cy.get('[data-testid="input-number"]').type('{selectall}100')
    cy.get('[data-testid="input-number"]').blur()
    cy.get('[data-testid="input-number"]').should('have.value', '100')
  })
})
