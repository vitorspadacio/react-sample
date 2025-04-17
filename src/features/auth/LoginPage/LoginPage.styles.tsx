import colors from '@assets/styles/colors'
import { Button } from '@components/Styled/Buttons'
import styled from 'styled-components'

export const EnterButton = styled(Button)``

export const GoogleButton = styled(Button)`
  align-items: center;
  display: flex;
  grid-column: span 2;
  justify-content: center;

  img {
    margin-right: 1em;
    width: 1.25em;
  }
`

export const Register = styled.section`
  display: flex;
  flex-direction: column;

  a {
    color: ${colors.light};
  }
`
