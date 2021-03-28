import { useState, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  isChecked?: boolean
  color?: 'black' | 'white'
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label = '',
  labelFor = '',
  color = 'white',
  isChecked = false,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        defaultChecked={isChecked}
        value={value}
        {...props}
      />
      {label && (
        <S.Label htmlFor={labelFor} aria-labelledby={labelFor} color={color}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
