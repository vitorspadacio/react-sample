import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../assets/styles/colors'

export const Nav = styled.nav`
  align-items: center;
  background-color: ${colors.light};
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100%;
`

export const Content = styled.section`
  align-items: center;
  display: flex;
  width: 100%;
`

export const Title = styled(Link)`
  align-items: center;
  color: ${colors.dark};
  display: flex;
  font-size: 1em;
  font-weight: 600;
  margin: 0;
  padding: 0.7em 2em;
  text-decoration: none;
  text-transform: uppercase;

  img {
    margin-right: 0.75em;
    width: 1.75em;
  }
`

export const MenuItem = styled(Link)`
  color: ${colors.white};
  padding: 1em 2em;
  text-decoration: none;

  &:hover {
    color: ${colors.soft};
  }
`

export const Login = styled(MenuItem)`
  padding-right: 0.5em;
`

export const DisplayName = styled.span`
  padding: 1em 2em;
  padding-right: 0.5em;
`

export const Logged = styled.section`
  display: flex;
  margin-left: auto;
  margin-right: 1em;

  img {
    width: 1.5em;
  }
`
