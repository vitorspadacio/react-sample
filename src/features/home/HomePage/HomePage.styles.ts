import colors from '@assets/styles/colors'
import { styled } from 'styled-components'

export const Container = styled.section`
  button {
    margin-right: 1em;
    text-transform: uppercase;
  }
`

export const Counter = styled.p`
  color: ${colors.dark};
  font-size: 32px;
  font-weight: bold;
`

export default { Container, Counter }
