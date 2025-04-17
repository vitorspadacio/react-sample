import favicon from '@assets/images/favicon.png'
import noUserIcon from '@assets/images/no_user.svg'
import userIcon from '@assets/images/user.svg'
import { selectDisplayName } from '@features/auth/AuthSelectors'
import { useAuthStore } from '@features/auth/AuthStore'
import { router } from '@features/routes'
import { Content, DisplayName, Logged, Login, MenuItem, Nav, Title } from './Menu.styles'

export default function () {
  const { user } = useAuthStore()
  const displayName = useAuthStore(selectDisplayName)

  const actualLogLink = user ? (
    <DisplayName>{displayName}</DisplayName>
  ) : (
    <Login onClick={() => handleNavigateClick('/auth/login')}>Entrar</Login>
  )

  const actualUserIcon = user ? userIcon : noUserIcon

  const handleNavigateClick = (route: string) => router.navigate(route)

  return (
    <Nav>
      <Content>
        <Title onClick={() => handleNavigateClick('/')}>
          <img src={favicon} alt='logo' />
          React Sample
        </Title>

        <MenuItem onClick={() => handleNavigateClick('/todo')}>Todo</MenuItem>
        <MenuItem onClick={() => handleNavigateClick('/rpg')}>RPG</MenuItem>

        <Logged>
          {actualLogLink}
          <img alt='user' src={actualUserIcon} />
        </Logged>
      </Content>
    </Nav>
  )
}
