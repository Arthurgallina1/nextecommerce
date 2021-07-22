import * as S from './styles'
import Heading from 'components/Heading'

export type TextContentProps = {
  title?: string
  content: string
}

// create sanitize method for the __html content

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper data-cy="content">
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
