/// <reference path="../support/index.d.ts" />

describe.skip('Cypress TS', () => {
  it.skip('should go to Google', () => {
    cy.google()
  })

  it.skip('should change light/dark theme on willian site', () => {
    cy.visit('https://willianjusten.com.br')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.light').should('exist')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.dark').should('exist')
  })

  it('should visit won games', () => {
    cy.visit('https://wongames.willianjusten.com.br')

    cy.findByText(/Esse é um site de estudos!/i).should('exist')
  })
})
