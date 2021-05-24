import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading size="small" lineBottom color="black">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />

      <TextField
        type="email"
        name="email"
        placeholder="E-mail"
        label="E-mail"
        initialValue={email}
        disabled
      />

      <TextField
        type="password"
        name="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        type="password"
        name="new_password"
        placeholder="New password"
        label="New Password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
