/// <reference path="../support/index.d.ts" />

import { createUser, User } from '../support/generate'

describe('Checkout', () => {
  let user: User

  describe('Free Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy free games', () => {
      //create user
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      //go to explore page and filter free games
      cy.findByRole('link', { name: /explore/i }).click()
      cy.findByText(/free/i).click()
      cy.url().should('contain', 'price_lte=0')

      //add free game to cart
      cy.addToCartByIndex(0)

      //verify if cart has 1 game and open dropdown
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      //click to buy
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // find free games text
      cy.findByText(/Only free games, click buy and enjoy/i).should('exist')

      //click to buy
      cy.findByRole('button', { name: /buy now/i }).click()
      //be redirect to sucess
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in orders page', () => {
      cy.visit('/profile/orders')
      //should redir to sign in
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })

  describe.only('Paid Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy paid games', () => {
      //create user
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      //go to explore page and filter free games
      cy.findByRole('link', { name: /explore/i }).click()
      cy.findByText(/highest to lowest/i).click()
      cy.location('href').should('contain', 'sort=price%3Adesc')

      //add free game to cart
      cy.addToCartByIndex(0)

      //verify if cart has 1 game and open dropdown
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      //click to buy
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      //buy button should be disabled because CC is not filled
      cy.findByRole('button', { name: /buy now/i }).should(
        'have.attr',
        'disabled'
      )

      //fill CC data with cypress lib
      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1040')
      cy.fillElementsInput('cardCvc', '123')

      //click to buy
      cy.findByRole('button', { name: /buy now/i }).click()
      //be redirect to sucess
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in orders page', () => {
      cy.visit('/profile/orders')
      //should redir to sign in
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
