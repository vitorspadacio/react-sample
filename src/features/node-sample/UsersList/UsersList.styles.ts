import styled from 'styled-components'
import colors from '../../../assets/styles/colors'

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  border-radius: 4px;
  border: 1px solid ${colors.lightBlue};
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 1em;
  padding: 1em;
  width: 12em;
`

export const Info = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  small {
    color: ${colors.lightBlue};
    font-size: 0.75em;
  }

  span {
    text-align: right;
  }
`

export const Actions = styled.div`
  display: flex;
  margin-top: 0.75em;
  justify-content: space-around;

  img {
    height: 30px;
    width: 30px;
  }
`

export const ActionButton = styled.button`
  border: none;
  background-color: transparent;
`

export default { Container, ListItem, Info }
