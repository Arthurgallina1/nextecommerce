import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import Banner from 'components/Banner'
import { BannerProps } from 'components/Banner'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  infinite: false,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const Bannerslider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner {...item} key={item.title} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default Bannerslider
