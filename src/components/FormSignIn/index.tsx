/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

import * as S from './styles'

const FormSignIn = () => {
  const { push } = useRouter()
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setValues((oldValues) => ({ ...oldValues, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }

    console.error('email ou senha invalido')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          onInputChange={(v) => handleInputChange('email', v)}
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          onInputChange={(v) => handleInputChange('password', v)}
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth>
          Sign in now
        </Button>
        <FormLink>
          Don't have an account? <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
