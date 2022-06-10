import styled from 'styled-components'
import colors from '../../assets/styles/colors'

const Footer = styled.footer`
  padding: 1em;

  h4 {
    color: ${colors.white};
    text-align: center;
  }
`

export default function () {
  return (
    <Footer>
      <h4>React Sample</h4>
    </Footer>
  )
}
