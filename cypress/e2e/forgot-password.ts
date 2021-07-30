/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  // happy path
  it('should fill the input and receive a success message', () => {
    //intercept api calls and returns success
    cy.intercept('POST', `**/auth/forgot-password`, (res) => {
      res.reply({
        status: 200,
        body: { ok: true }
      })
      expect(res.body.email).to.eq('teste@com.br')
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type('teste@com.br')
    cy.findByRole('button', { name: /send email/i }).click()

    cy.findByText(/you just received an email!/i).should('exist')
  })

  it('should fill the input with an invalid email and receive an error', () => {
    cy.intercept('POST', `**/auth/forgot-password`, (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'This email does not exist'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/forgot-password')

    cy.findAllByPlaceholderText(/email/i).type('teste@com.br')
    cy.findByRole('button', { name: /send email/i }).click()

    cy.findByText(/This email does not exist/i).should('exist')
  })
})
