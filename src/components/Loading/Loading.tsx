import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../../features/types'
import './Loading.scss'

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

export default function () {
  const isLoading = useSelector((state: State) => state.app.loadingStack > 0)

  return (isLoading && (
    <LoadingContainer>
      <div id='loading' data-testid='loading'><div /><div /></div>
    </LoadingContainer>
  ))
}
