import styled from 'styled-components'
import colors from '../../../assets/styles/colors'

export const Container = styled.div`
  width: 35%;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  span {
    color: ${colors.soft};
    margin-bottom: 0.5em;
  }
`

export const Error = styled.p`
  color: ${colors.red};
  font-size: 0.75em;
  margin: 0.25em 0 1em 0;
  min-height: 12px;
`

export const ButtonContainer = styled.div`
  display: flex;

  button {
    margin-right: 1em;
  }
`
