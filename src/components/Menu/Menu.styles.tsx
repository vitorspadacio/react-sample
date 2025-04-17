import colors from '@assets/styles/colors'
import { styled } from 'styled-components'

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

export const Title = styled.a`
  align-items: center;
  color: ${colors.dark};
  cursor: pointer;
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

export const MenuItem = styled.a`
  color: ${colors.white};
  cursor: pointer;
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
  color: ${colors.dark};
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
