import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { Container } from 'components/Container'

import * as S from './styles'
import { useSession } from 'next-auth/client'

export type BaseTemplatesProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplatesProps) => {
  const [session, loading] = useSession()

  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} loading={loading} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
