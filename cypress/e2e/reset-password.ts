/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should error if password does not match', () => {
    cy.visit('/reset-password?code=anything')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('321')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/confirm password does not match with password/i).should(
      'exist'
    )
  })

  it('should return error if incorrect coded provided', () => {
    cy.intercept('POST', `**/auth/reset-password`, (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect code provided.'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/reset-password?code=wrong_code')

    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/Incorrect code provided/i).should('exist')
  })
  //happy path => signIn the user
  it('should be able to reset password and be redirected to homepage', () => {
    // rota do credentials do next-auth
    cy.intercept('POST', '**/auth/callback/credentials*', {
      statusCode: 200,
      body: { user: {} }
    })

    // rota do Strapi
    cy.intercept('POST', '**/auth/reset-password', {
      statusCode: 200,
      body: { user: { email: 'valid@email.com' } }
    })

    // rota de session do next-auth
    cy.intercept('GET', '**/auth/session*', {
      statusCode: 200,
      body: { user: { name: 'cypress' } }
    })

    cy.visit('/reset-password?code=valid_token')

    //fill passwords awith a valid token
    cy.findAllByPlaceholderText(/^password/i).type('123')
    cy.findAllByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset password/i }).click()
    //sign in happens in background
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    //user gets redirected to home with user logged in
    cy.findByText(/cypress/i).should('exist')
  })
})
