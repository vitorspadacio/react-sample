import styled from 'styled-components'
import colors from '../../assets/styles/colors'

export const Button = styled.button`
  background-color: ${colors.lightBlue};
  border-radius: 8px;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  padding: 0.75em 1em;
`

export const RedButton = styled(Button)`
  background-color: ${colors.red};
`
