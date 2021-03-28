import { useState, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  color?: 'black' | 'white'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label = '',
  labelFor = '',
  color = 'black'
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  //controlled (state)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input id={labelFor} type="checkbox" onChange={onChange} />
      {label && (
        <S.Label htmlFor={labelFor} aria-labelledby={labelFor} color={color}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
