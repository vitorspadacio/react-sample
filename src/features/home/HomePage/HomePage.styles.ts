import styled from 'styled-components'
import colors from '../../../assets/styles/colors'

export const Container = styled.section`
  p { width: 60%; }

  button {
    margin-right: 1em;
    text-transform: uppercase;
  }
`

export const Counter = styled.p`
  color: ${colors.darkBlue};
  font-size: 32px;
  font-weight: bold;
`

export default { Container, Counter }
