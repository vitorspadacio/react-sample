import styled from 'styled-components'
import colors from '../../assets/styles/colors'

interface Props {
  hasError?: boolean
}

export const Input = styled.input<Props>`
  background-color: ${colors.white};
  border: 1px solid ${({ hasError }) => (hasError ? colors.red : colors.light)};
  border-radius: 4px;
  color: ${colors.dark};
  font-size: 1em;
  height: 2.75em;
  padding: 0 1em;
  width: 100%;

  &::placeholder {
    color: ${({ hasError }) => (hasError ? colors.red : colors.light)};
  }
`
