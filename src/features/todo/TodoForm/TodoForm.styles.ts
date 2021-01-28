import styled from 'styled-components'
import colors from '../../../assets/styles/colors'
import { Button } from '../../../components/Styled/Buttons'

export const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 1em 0;
  width: 60%;
`

export const ButtonPlus = styled(Button)`
  margin-right: 0.75em;
`

export const InsertInput = styled.input`
  border: 1px solid ${colors.lightBlue};
  border-radius: 4px;
  font-size: 16px;
  padding: 0.6em;
  width: calc(100% - 50px);
`

export const Error = styled.span`
  color: ${colors.red};
  font-size: 12px;
  margin-left: 4em;
  margin-top: 0.5em;
`
