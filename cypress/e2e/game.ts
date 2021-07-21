/// <reference path="../support/index.d.ts" />
// referencia necessario para ter comandos da RTL e custom

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/ghostrunner')

    cy.getDataByCy('game-info').within(() => {
      {
        cy.findByRole('heading', { name: /ghostrunner/i }).should('exist')
        //   expect(cy.findByRole('heading', { name: /ghostrunner/i})).exist()
        cy.findByText(/^Ghostrunner is a hardcore FPP slasher packed/i).should(
          'exist'
        )
        cy.findByText('$49.49').should('exist')
        cy.findByRole('button', { name: /Add to cart/i }).should('exist')

        //gallery
        // cy.findAllByRole('button', { name: /Thumb \-/i }).should(
        //   'have.length.gt',
        //   0
        // )
      }
    })
  })
})
