import Link from 'next/link'
import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem from 'components/GameItem'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total } = useCart()

  return (
    <S.Wrapper isEmpty={!items.length}>
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
}

export default CartList
