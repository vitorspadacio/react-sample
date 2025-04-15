import favicon from '../../assets/images/favicon.png'
import noUserIcon from '../../assets/images/no_user.svg'
import userIcon from '../../assets/images/user.svg'
import {
  Content, DisplayName, Logged, Login, MenuItem, Nav, Title,
} from './Menu.styles'

export default function () {
  const user = undefined // useSelector(selectUser)
  const displayName = undefined // useSelector(selectDisplayName)

  const actualLogLink = user
    ? <DisplayName>{displayName}</DisplayName>
    : <Login to='/auth/login'>Entrar</Login>

  const actualUserIcon = user ? userIcon : noUserIcon

  return (
    <Nav>
      <Content>
        <Title to='/'>
          <img src={favicon} alt='logo' />
          React Sample
        </Title>

        <MenuItem to='/todo'>Todo</MenuItem>
        <MenuItem to='/rpg'>RPG</MenuItem>
        {/* <MenuItem to='/node-sample'>Node Sample</MenuItem> */}

        <Logged>
          { actualLogLink }
          <img alt='user' src={actualUserIcon} />
        </Logged>
      </Content>
    </Nav>
  )
}
