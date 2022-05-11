import styled from 'styled-components'
import colors from '../../assets/styles/colors'

interface Props {
  hasError?: boolean,
}

export const Input = styled.input<Props>`
  border: 1px solid ${({ hasError }) => (hasError ? colors.red : colors.lightBlue)};
  border-radius: 4px;
  font-size: 16px;
  padding: 0.6em;
  width: calc(100% - 50px);

  :disabled {
    background-color: ${colors.softBlue};
    color: ${colors.lightBlue}; 
  }
`
