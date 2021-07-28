/// <reference path="../support/index.d.ts" />
// referencia necessario para ter comandos da RTL e custom

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/ghostrunner')

    cy.getByDataCy('game-info').within(() => {
      {
        cy.findByRole('heading', { name: /ghostrunner/i }).should('exist')
        //   expect(cy.findByRole('heading', { name: /ghostrunner/i})).exist()
        cy.findByText(/^Ghostrunner is a hardcore FPP slasher packed/i).should(
          'exist'
        )
        cy.findByText('$49.49').should('exist')
        cy.findByRole('button', { name: /Add to cart/i }).should('exist')

        // gallery
      }
    })

    cy.findAllByRole('button', { name: /Thumb \-/i }).should(
      'have.length.gt',
      0
    )

    // content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)

    // Details
    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')
      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('heading', { name: /publisher/i }).should('exist')
      cy.findByRole('heading', { name: /rating/i }).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')

      cy.findByText(/oct 25, 2020/i).should('exist')
      cy.findByRole('img', { name: /windows/i }).should('exist')
      cy.findByText(/free/i).should('exist')
      cy.findByText('Action / Sci-fi / FPP').should('exist')
    })

    cy.shouldRenderShowcase({ name: 'Upcoming Games', highlight: true })
    cy.shouldRenderShowcase({
      name: 'You may like these games',
      highlight: false
    })
  })
})
