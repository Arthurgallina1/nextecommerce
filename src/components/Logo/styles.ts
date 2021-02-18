import styled, { css } from 'styled-components'
import { LogoProps } from './index'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3.rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9.rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  color: red;
  ${({ theme, color = 'white', size }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}
  `}
`
