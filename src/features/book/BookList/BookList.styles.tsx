import colors from '@assets/styles/colors'
import { styled } from 'styled-components'

interface Props {
  hasuser?: string
}

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export const Table = styled.div<Props>`
  display: grid;
  gap: 0.25em;
  grid-template-columns: ${({ hasuser }) =>
    hasuser === 'true' ? '1fr 2fr 2fr 0.5fr 1fr 1fr' : '1fr 2fr 2fr 0.5fr 1fr'};
  grid-template-rows: auto 5em;
  margin: 1em 0;
`

export const Header = styled.div`
  background: #f4f4f4;
  font-weight: bold;
  padding: 0.75em;
`

export const Row = styled.div`
  display: contents;
`

export const Cell = styled.div`
  border-bottom: 1px solid ${colors.dark};
  overflow: auto;
  padding: 0.75em;
  text-overflow: ellipsis;
  word-wrap: break-word;

  &.actions {
    padding: 0;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  background: ${colors.light};
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 0.5em;
  padding: 0.5em 1em;
`

export const DeleteButton = styled(Button)`
  background: ${colors.red};
`
