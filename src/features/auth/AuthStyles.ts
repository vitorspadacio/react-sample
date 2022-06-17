import styled from 'styled-components'
import { OutlineButton } from '../../components/Styled/Buttons'

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Form = styled.form`
  margin: 2em 0;
  width: 35%;
`

export const Buttons = styled.section`
  display: grid;
  grid-gap: 0.75em;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 10%;
  width: 80%;
`

export const BackButton = styled(OutlineButton)``
