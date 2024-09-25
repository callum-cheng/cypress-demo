/// <reference types="cypress" />

describe('My First Test', () => {
  it('Loads the page', () => {
    cy.visit('localhost:3000')
    cy.get('.App-link').contains('Learn React')
  })
})