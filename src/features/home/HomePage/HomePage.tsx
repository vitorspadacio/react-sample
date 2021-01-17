import { useDispatch, useSelector } from 'react-redux'
import { selectNumber } from '../HomeSelectors'
import { actions } from '../HomeState'
import './HomePage.scss'

export default () => {
  const dispatch = useDispatch()
  const number = useSelector(selectNumber)

  const increment = () => dispatch(actions.increment())

  const decrement = () => dispatch(actions.decrement())

  return (
    <section id='home-page'>
      <h1>Olá Mundo!</h1>
      <p>Essa é uma aplicação de exemplo de React.</p>

      <p>
        Esse exemplo é opinativo e segue uma estrutura que mescla diferentes recomendações de
        JavaScript, TypeScript, React, testes, além de unir a experiência de utilização e entrega
        de projetos para diferentes clientes em produção.
      </p>

      <p>As tecnologias utilizadas no exemplo são:</p>
      <ul>
        <li>Estrutura de pastas pronta para aplicação de médio porte;</li>
        <li>Estilização com SASS;</li>
        <li>Padronização de código com .editorconfig e ESLint;</li>
        <li>Gerenciamento de estado único (Redux);</li>
        <li>Middleware de efeitos colaterais (Redux-Saga);</li>
        <li>Testes automátizados (Jest);</li>
        <li>Testes de integração com DOM em memória (Testing-Library);</li>
      </ul>

      <p>Além disso encontrará diferentes exemplos para os seguintes cenários:</p>
      <ul>
        <li>Componentes sem estado;</li>
        <li>Componentes interagindo com estado único;</li>
        <li>Componentes compartilhados;</li>
        <li>Testes de integração;</li>
        <li>Testes de unidade em módulos e generators (sagas);</li>
        <li>Variáveis de ambientes;</li>
      </ul>

      <p className='counter'>Contador: {number}</p>

      <button type='button' onClick={() => decrement()}>Decrementar</button>
      <button type='button' onClick={() => increment()}>Incrementar</button>
    </section>
  )
}
