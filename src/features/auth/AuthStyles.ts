import mediaQueries from '@assets/styles/media-queries'
import { OutlineButton } from '@components/Styled/Buttons'
import { styled } from 'styled-components'

export const Container = styled.section`
  align-items: center;
  text-align: center;
  width: 100%;
`

export const Form = styled.form`
  margin: 2em auto;
  width: 25em;

  @media (max-width: ${mediaQueries.small}) {
    width: 100%;
  }
`

export const Buttons = styled.section`
  display: grid;
  grid-gap: 0.75em;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 10%;
  width: 80%;
`

export const BackButton = styled(OutlineButton)``
