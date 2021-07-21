import * as S from './styles'
import Button from '../Button'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'right' | 'left'
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  alignment = 'right',
  buttonLabel,
  buttonLink
}: HighlightProps) => (
  <S.Wrapper
    backgroundImage={backgroundImage}
    alignment={alignment}
    data-cy="highlight"
  >
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
