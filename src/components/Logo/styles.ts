import styled, { css } from 'styled-components'
import { LogoProps } from './index'

export const Wrapper = styled.div<LogoProps>`
  color: red;
  ${({ theme, color = 'white' }) => css`
    color: ${theme.colors[color!]};
  `}
`
