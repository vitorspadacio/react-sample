import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../assets/styles/colors'

const Nav = styled.nav`
  align-items: center;
  background-color: ${colors.darkBlue};
  display: flex;
  height: 50px;
  width: 100%;

  a {
    color: ${colors.white};
    text-decoration: none;
    padding: 1em 2em;

    &:hover {
      color: ${colors.softBlue};
    }
  }
`

export default () => (
  <Nav>
    <Link to='/'>Home</Link>
    <Link to='/todo'>Todo</Link>
    <Link to='/star-wars'>Star Wars</Link>
    <Link to='/node-sample'>Node Sample</Link>
  </Nav>
)
