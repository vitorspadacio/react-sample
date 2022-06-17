import styled from 'styled-components'
import colors from '../../assets/styles/colors'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
  
  span {
    color: ${colors.dark};
    margin-bottom: 0.75em;
  }
`

export const Error = styled.p`
  color: ${colors.red};
  font-size: 0.75em;
  height: 1em;
  margin-top: 0.5em;
`
