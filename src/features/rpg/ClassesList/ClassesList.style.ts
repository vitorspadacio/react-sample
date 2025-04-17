import colors from '@assets/styles/colors'
import mediaQueries from '@assets/styles/media-queries'
import { styled } from 'styled-components'

export const Container = styled.ul`
  display: grid;
  grid-column-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: ${mediaQueries.large}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${mediaQueries.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${mediaQueries.small}) {
    grid-template-columns: 1fr;
  }
`

export const ListItem = styled.li`
  border: 1px solid ${colors.light};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  margin-left: 0;
  padding: 1em;
`

export const Info = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  small {
    color: ${colors.light};
    font-size: 0.75em;
  }

  span {
    text-align: right;
  }
`

export default { Container, ListItem, Info }
