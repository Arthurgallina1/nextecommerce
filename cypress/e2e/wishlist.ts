/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    //access page not logged in
    cy.visit('/wishlist')
    //redirect to be signed in
    cy.signIn()
    //verify if wishlist is empty
    cy.findByRole('heading', { name: /your wishlist is empty/i }).should(
      'exist'
    )
    //grab a game and add to wishlist
    cy.getByDataCy('game-card')
      .eq(0)
      .within(() => {
        cy.findAllByLabelText(/add to wishlist/i).click()
      })

    //verify if game is on wishlist
    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })
    //remove game
    cy.getByDataCy('wishlist').within(() => {
      cy.findAllByLabelText(/remove from wishlist/i).click()
    })

    //verify if empty
    cy.findByRole('heading', { name: /your wishlist is empty/i }).should(
      'exist'
    )
  })
})
