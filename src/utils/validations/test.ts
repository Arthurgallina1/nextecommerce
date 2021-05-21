import { signInValidate, signUpValidate } from '.'

describe('validations', () => {
  describe('signInValidate', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid-email', password: '1234' }
      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('signUpValidate', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '', username: '' }

      expect(signUpValidate(values)).toMatchObject({
        email: expect.any(String),
        password: expect.any(String),
        username: expect.any(String)
      })
    })

    it('should return short usernmar error', () => {
      const values = {
        username: 'hi',
        email: 'invalid-email',
        password: '1234'
      }
      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should return invalid email error', () => {
      const values = {
        username: 'test',
        email: 'invalid-email',
        password: '1234'
      }
      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should return error if password doesnt match with password', () => {
      const values = {
        username: 'test',
        email: 'email@valid.com',
        password: '1234',
        confirm_password: '4321'
      }
      expect(signInValidate(values).confirm_password).toMatchInlineSnapshot(
        `"\\"confirm_password\\" is not allowed"`
      )
    })
  })
})
