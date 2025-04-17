import colors from '@assets/styles/colors'
import { styled } from 'styled-components'

interface Props {
  haserror?: string
}

export const Input = styled.input<Props>`
  background-color: ${colors.white};
  border: 1px solid ${({ haserror }) => (haserror === 'true' ? colors.red : colors.light)};
  border-radius: 4px;
  color: ${colors.dark};
  font-size: 1em;
  height: 2.75em;
  padding: 0 1em;
  width: 100%;

  &::placeholder {
    color: ${({ haserror }) => (haserror === 'true' ? colors.red : colors.light)};
  }
`
