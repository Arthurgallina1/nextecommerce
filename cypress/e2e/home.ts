/// <reference path="../support/index.d.ts" />
// referencia necessario para ter comandos da RTL e custom

describe('Home Page', () => {
  it('should render home section', () => {
    cy.visit('/')
    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /new test banner/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
