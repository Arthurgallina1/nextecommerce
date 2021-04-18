import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Link from 'next/link'
import * as S from './styles'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem {...item} key={item.title} />
        ))}
        <S.Footer>
          {!hasButton && <span>Total: </span>}
          <S.Total>{total}</S.Total>
          {hasButton && (
            <Link href="/cart">
              <Button as="a">Buy it now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        hasLink
        title="Your cart is empty"
        description="Go back to the store"
      />
    )}
  </S.Wrapper>
)

export default CartList
