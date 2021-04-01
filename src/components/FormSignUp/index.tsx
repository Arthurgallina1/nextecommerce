/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import Button from 'components/Button'

import TextField from 'components/TextField'
import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Email />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <S.FormLink>
        Already have an account? <Link href="/sign-in">Sign In</Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
