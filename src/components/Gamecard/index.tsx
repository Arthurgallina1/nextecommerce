import Image from 'next/image'
import Link from 'next/link'
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'
import { formatPrice } from 'utils/formatters'
import * as S from './styles'

export type GamecardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const Gamecard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GamecardProps) => (
  <S.Wrapper data-cy="game-card">
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <Image
          src={'https://via.placeholder.com/150' || img}
          alt={title}
          layout="fill"
        />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton role="button">
        <WishlistButton id={id} />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>
          {price === 0 ? 'FREE' : formatPrice(promotionalPrice || price)}
        </S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default Gamecard
