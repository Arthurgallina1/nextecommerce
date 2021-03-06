// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('getDataByCy', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args)
})

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /new test banner/i })
    cy.findByRole('link', { name: /buy now/i })

    cy.get(':nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /cyberpunk chess/i })
    cy.findByRole('link', { name: /buy now/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false }) => {
  cy.getDataByCy(`"${name}"`).within(() => {
    cy.findByRole('heading', { name }).should('exist')
    cy.getDataByCy('highlight').should(highlight ? 'exist' : 'not.exist')

    if (highlight) {
      cy.getDataByCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

    cy.getDataByCy('game-card').should('have.length.gt', 0)
  })
})
