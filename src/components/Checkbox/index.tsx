import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
}

const Checkbox = ({ label = '', labelFor = '' }: CheckboxProps) => (
  <S.Wrapper>
    {label && <label htmlFor={labelFor}>{label}</label>}
    <input id={labelFor} type="checkbox" />
  </S.Wrapper>
)

export default Checkbox
