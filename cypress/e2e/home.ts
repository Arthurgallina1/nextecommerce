/// <reference path="../support/index.d.ts" />
// referencia necessario para ter comandos da RTL e custom

describe('Home Page', () => {
  it('should render home section', () => {
    cy.visit('/')
    cy.shouldRenderBanner()
    cy.shouldRenderShowcase({ name: 'New Games' })
    cy.shouldRenderShowcase({ name: 'Popular Games' })
    cy.shouldRenderShowcase({ name: 'Upcoming Games' })
  })
})
