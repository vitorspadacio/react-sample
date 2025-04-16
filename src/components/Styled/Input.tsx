import styled from 'styled-components'
import colors from '../../assets/styles/colors'

interface Props {
  haserror?: string
}

export const Input = styled.input<Props>`
  border: 1px solid ${({ haserror }) => (!!haserror ? colors.red : colors.light)};
  border-radius: 4px;
  font-size: 16px;
  padding: 0.6em;
  width: calc(100% - 50px);

  :disabled {
    background-color: ${colors.soft};
    color: ${colors.light};
  }
`
