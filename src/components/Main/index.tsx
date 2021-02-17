import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/public/vercel.svg" alt="imagem do simbolo da vercel" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/" alt="desenvolvedor sentado"></S.Illustration>
  </S.Wrapper>
)

export default Main
