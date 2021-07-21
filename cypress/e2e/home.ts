/// <reference path="../support/index.d.ts" />
// referencia necessario para ter comandos da RTL e custom

describe('Home Page', () => {
  it('should render home section', () => {
    cy.visit('/')
    cy.shouldRenderBanner()
    cy.shouldRenderShowcase({ name: 'New Games', highlight: false })
    cy.shouldRenderShowcase({ name: 'Popular Games', highlight: true })
    cy.shouldRenderShowcase({ name: 'Upcoming Games', highlight: true })
  })
})
