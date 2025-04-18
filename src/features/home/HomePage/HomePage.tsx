import { Button, OutlineButton, RedButton } from '@components/Styled/Buttons'
import { useEffect } from 'react'
import { selectNumber } from '../HomeSelectors'
import { useHomeStore } from '../HomeStore'
import { Container, Counter } from './HomePage.styles'

export default function () {
  const number = useHomeStore(selectNumber)
  const { increment, decrement, reset } = useHomeStore()

  useEffect(() => {
    document.title = 'React Sample'
  }, [])

  const onIncrementClick = () => increment()

  const onDecrementClick = () => decrement()

  const onResetClick = () => reset()

  return (
    <Container>
      <h1>Olá Mundo!</h1>
      <h2>Olá Mundo!</h2>
      <h3>Olá Mundo!</h3>

      <p>Essa é uma aplicação de exemplo de React.</p>

      <p>
        Esse exemplo é opinativo e segue uma estrutura que mescla diferentes recomendações de
        JavaScript, TypeScript, React, testes, além de unir a experiência de utilização e entrega de
        projetos para diferentes clientes em produção.
      </p>

      <p>As tecnologias utilizadas no exemplo são:</p>
      <ul>
        <li>Renderização com React 19;</li>
        <li>Estrutura de pastas pronta para aplicação de médio porte;</li>
        <li>Estilização com SASS e/ou styled-components;</li>
        <li>Padronização de código com .editorconfig, ESLint e Prettier;</li>
        <li>Gerenciamento de estado único (Zustand);</li>
        <li>Formulários com hooks (React-Hook-Form);</li>
        <li>Testes automátizados (Jest);</li>
        <li>Testes de integração com DOM em memória (Testing-Library);</li>
      </ul>

      <p>Além disso encontrará diferentes exemplos para os seguintes cenários:</p>
      <ul>
        <li>Componentes sem estado;</li>
        <li>Componentes interagindo com estado único;</li>
        <li>Componentes compartilhados;</li>
        <li>Testes de integração;</li>
        <li>Testes de unidade em módulos;</li>
        <li>Variáveis de ambientes;</li>
      </ul>

      <p>No quesito publicação temos:</p>
      <ul>
        <li>Setup utilizando Firebase Hosting;</li>
        <li>Build CI utilizando CircleCI;</li>
        <li>Badges com informações de build, coverage e dependencies.</li>
      </ul>

      <Counter>Contador: {number}</Counter>

      <RedButton type='button' onClick={() => onDecrementClick()}>
        Decrementar
      </RedButton>
      <OutlineButton type='button' onClick={() => onResetClick()}>
        Limpar
      </OutlineButton>
      <Button type='button' onClick={() => onIncrementClick()}>
        Incrementar
      </Button>
    </Container>
  )
}
