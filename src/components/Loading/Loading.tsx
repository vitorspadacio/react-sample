import styled from 'styled-components'
import './Loading.scss'

interface Props {
  show: boolean,
}

const LoadingContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: absolute;
  width: 100%;

  #loading {
    left: 45%;
    position: absolute;
    top: 45%;
  }
`

export default function ({ show }: Props) {
  return (show && (
    <LoadingContainer>
      <div id='loading' data-testid='loading'><div /><div /></div>
    </LoadingContainer>
  ))
}
