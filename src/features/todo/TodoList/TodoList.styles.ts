import colors from '@assets/styles/colors'
import styled from 'styled-components'

export const Container = styled.ul`
  list-style: none;
`

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  height: 40px;
  margin-bottom: 1em;
  margin-left: 0;
`

export const Checkbox = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;

  & + label:before {
    background-color: ${colors.white};
    border: 1px solid ${colors.light};
    border-radius: 8px;
    content: '';
    cursor: pointer;
    display: inline-block;
    height: 40px;
    margin-right: 1.25em;
    width: 36px;
  }

  &:checked {
    & + label {
      text-decoration: line-through;
    }

    & + label:before {
      background-color: ${colors.light};
    }
  }
`

export const Description = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  line-height: calc(40px - 0.6em);
`
