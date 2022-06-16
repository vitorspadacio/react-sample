import styled from 'styled-components'
import colors from '../../assets/styles/colors'

export const Button = styled.button`
  background-color: ${colors.light};
  border: none;
  border-radius: 8px;
  color: ${colors.white};
  cursor: pointer;
  padding: 0.75em 1em;

  :disabled {
    background-color: ${colors.soft};
    color: ${colors.white};
  }
`

export const RedButton = styled(Button)`
  background-color: ${colors.red};
`

export const OutlineButton = styled(Button)`
  background-color: ${colors.white};
  border: 1px solid ${colors.light};
  color: ${colors.dark};
`
